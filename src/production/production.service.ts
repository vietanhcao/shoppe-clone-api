import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cache } from 'cache-manager';
import * as mongoose from 'mongoose';
import { FilterQuery, Model } from 'mongoose';
import ClientQuery from '../common/client-query/client-query';
import { QueryParse } from '../common/client-query/client-query.type';
import { User } from '../users/schema/user.schema';
import { GET_POSTS_CACHE_KEY } from './cache/postsCacheKey.constant';
import { PostDto } from './dto/post.dto';
import UpdatePostDto from './dto/updatePost.dto';
import PostNotFoundException from './exception/postNotFund.exception';
import { Production, ProductionDocument } from './production.schema';

@Injectable()
class ProductionService {
  private readonly logger = new Logger(ProductionService.name);
  public postClientQuery: ClientQuery<ProductionDocument>;
  constructor(
    @InjectModel(Production.name)
    private productionModel: Model<ProductionDocument>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.postClientQuery = new ClientQuery(this.productionModel);
  }

  async clearCache() {
    const keys: string[] = await this.cacheManager.store.keys();
    keys.forEach((key) => {
      if (key.startsWith(GET_POSTS_CACHE_KEY)) {
        this.cacheManager.del(key);
      }
    });
  }

  /**
   * Lấy ra danh sách các bài viết có trong cache
   * @param skip
   * @param limit
   * @param startId
   */
  async findAll(query?: QueryParse) {
    const filters: FilterQuery<ProductionDocument> = {};
    const { hits, pagination } = await this.postClientQuery.findForQuery(
      query,
      {
        populate: [
          // { path: 'author', select: 'email lastName firstName -_id' }, // exclude password
          { path: 'category' }, //"populate" returning the data of the author along with the post.
          // { path: 'series' },
        ],
        queryMongoose: filters,
        omit: ['title', '__v', 'createdAt', 'comments'],
      },
    );
    // const results = await response;
    // const count = await this.productionModel.find(filters).countDocuments();
    return { result: hits, pagination };
  }

  async findOne(id: string) {
    const post = await this.productionModel.findById(id);
    // .populate([
    //   { path: 'author', select: 'email lastName firstName -_id' }, // exclude password
    // ]);
    if (!post) {
      this.logger.warn('Tried to access a post that does not exist');
      throw new PostNotFoundException(id);
    }
    // post.id = post._id.toString();
    return post;
  }

  async create(postData: PostDto, author: User) {
    const createdPost = new this.productionModel({
      ...postData,
      author,
    });
    await createdPost.populate(['categories']); // query include execPopulate method show data categories and series
    const newPost = await createdPost.save();
    // hide elastic search
    // this.postsSearchService.indexPost(newPost);
    // await this.clearCache();
    return newPost;
  }

  async update(id: string, postData: UpdatePostDto, author: User) {
    // put do this
    // .findByIdAndUpdate(id, postData)
    // .setOptions({ overwrite: true, new: true })
    const post = await this.productionModel
      //update partial
      .findOneAndUpdate({ _id: id, author }, postData, {
        new: true,
      })
      .populate('author')
      .populate('categories')
      .populate('series');
    if (!post) {
      throw new NotFoundException();
    }
    // if (post) {
    //   await this.postsSearchService.update(post);
    //   return post;
    // }
    // await this.clearCache();
    return post;
  }
  // async delete(postId: string, author: User) {
  //   const result = await this.productionModel.findOneAndDelete({
  //     _id: postId,
  //     author,
  //   });
  //   if (!result) {
  //     throw new NotFoundException();
  //   }
  //   // await this.clearCache();
  //   return result.id;
  // }
  async deleteMany(
    ids: string[],
    session: mongoose.ClientSession | null = null,
  ) {
    // await this.clearCache();
    return this.productionModel.deleteMany({ _id: ids }).session(session);
  }
}

export default ProductionService;
