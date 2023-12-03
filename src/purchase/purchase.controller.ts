import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import RequestWithUser from '../authentication/requestWithUser.interface';
import JwtAuthenticationGuard from '../authentication/token/jwt-authentication.guard';
import { QueryParse } from '../common/client-query/client-query.type';
import Resolve from '../common/helpers/Resolve';
import ParamsWithId from '../utils/paramsWithId';
import PurchaseService from './purchase.service';
import PurchaseDto from './dto/purchase.dto';

@Controller('purchases')
export default class CategoriesController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  async getAllCategories(
    @Query() query: QueryParse,
    @Req() req: RequestWithUser,
  ) {
    const { result, pagination } = await this.purchaseService.findAll(
      query,
      req.user,
    );
    return Resolve.ok(0, 'Success', result, { pagination });
  }

  @Get(':id')
  @UseGuards(JwtAuthenticationGuard)
  async getCategory(@Param() { id }: ParamsWithId) {
    return this.purchaseService.findOne(id);
  }

  @Post('add-to-cart')
  @UseGuards(JwtAuthenticationGuard)
  async createCategory(
    @Body() purchase: PurchaseDto,
    @Req() req: RequestWithUser,
  ) {
    const result = await this.purchaseService.createOrUpdate(
      purchase,
      req.user,
    );

    return Resolve.ok(0, 'Success', result);
  }

  @Post('buy-products')
  @UseGuards(JwtAuthenticationGuard)
  async buyProducts(
    @Body() purchase: PurchaseDto[],
    @Req() req: RequestWithUser,
  ) {
    const result = await this.purchaseService.buyProducts(purchase, req.user);

    return Resolve.ok(0, 'Success', result);
  }

  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  async deleteCategory(@Param() { id }: ParamsWithId) {
    return this.purchaseService.delete(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthenticationGuard)
  async updateCategory(
    @Param() { id }: ParamsWithId,
    @Body() purchase: PurchaseDto,
  ) {
    return this.purchaseService.update(id, purchase);
  }
}
