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
import CategoriesService from './categories.service';
import CategoryDto from './dto/category.dto';

@Controller('categories')
export default class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories(@Query() query: QueryParse) {
    const { result, pagination } = await this.categoriesService.findAll(query);
    return Resolve.ok(0, 'Success', result, { pagination });
  }

  @Get(':id')
  @UseGuards(JwtAuthenticationGuard)
  async getCategory(@Param() { id }: ParamsWithId) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createCategory(
    @Body() category: CategoryDto,
    @Req() req: RequestWithUser,
  ) {
    return this.categoriesService.create(category, req.user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthenticationGuard)
  async deleteCategory(@Param() { id }: ParamsWithId) {
    return this.categoriesService.delete(id);
  }

  @Put(':id')
  @UseGuards(JwtAuthenticationGuard)
  async updateCategory(
    @Param() { id }: ParamsWithId,
    @Body() category: CategoryDto,
  ) {
    return this.categoriesService.update(id, category);
  }
}
