import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ClientQuery from '../common/client-query/client-query';
import { QueryParse } from '../common/client-query/client-query.type';
import ProductionService from '../production/production.service';
// import ProductionService from '../production/production.service';
import { User } from '../users/schema/user.schema';
import CategoryDto from './dto/purchase.dto';
import { Purchase, PurchaseDocument } from './purchase.schema';
import { STATUS_PURCHASE } from './types/purchase';

@Injectable()
class PurchaseService {
  constructor(
    @InjectModel(Purchase.name) private purchaseModel: Model<PurchaseDocument>,
    private productionService: ProductionService,
  ) {}

  /**
   * A method that fetches the categories from the database
   * @returns A promise with the list of categories
   */
  async findAll(query: QueryParse, user: User) {
    const client = new ClientQuery(this.purchaseModel);
    const response = await client.findForQuery(query, {
      populate: [
        { path: 'product' },
        // { path: 'modifiedBy', select: 'email' },
      ],
      omit: ['author', '__v'],
      queryMongoose: {
        user: {
          $eq: user._id,
        },
      },
    });
    return { ...response, result: response.hits };
  }

  async findOne(id: string) {
    const category = await this.purchaseModel.findById(id).populate('author');
    if (!category) {
      throw new NotFoundException();
    }
    return category;
  }

  /**
   *  Creates a new category pendding and wating for approval
   * @param dto
   * @param author
   * @returns
   */
  async createOrUpdate(dto: CategoryDto, user: User) {
    // có thể test transaction ở đây
    const createdOrUpdate = await this.purchaseModel.updateOne(
      {
        product: dto.product_id,
        user: user._id,
      },
      {
        $set: {
          price: 0,
          price_before_discount: 0,
        },
        $inc: { buy_count: 1 },
      },
      { new: true, upsert: true },
    );

    // todo get production
    const product = await this.productionService.findOne(dto.product_id);
    return { _id: product._id };
  }

  /**
   *
   * @param dto
   * @param author
   * @returns
   */
  async buyProducts(dto: CategoryDto[], user: User) {
    for await (const item of dto) {
      await this.purchaseModel.updateOne(
        {
          product: item.product_id,
          user: user._id,
        },
        {
          $set: {
            status: STATUS_PURCHASE.WAIT_FOR_CONFIRMATION,
          },
        },
        { new: true },
      );
    }

    return true;
  }

  // todo update approve
  async update(id: string, categoryData: CategoryDto) {
    const category = await this.purchaseModel
      .findByIdAndUpdate(id, categoryData)
      .setOptions({ overwrite: true, new: true });
    if (!category) {
      throw new NotFoundException();
    }
    return category;
  }

  /**
   * A method that deletes a category from the database
   * @param categoryId An id of a category. A category with this id should exist in the database
   */
  async delete(categoryId: string) {
    const result = await this.purchaseModel.findByIdAndDelete(categoryId);
    if (!result) {
      throw new NotFoundException();
    }
  }
}

export default PurchaseService;
