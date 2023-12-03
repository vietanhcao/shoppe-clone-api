import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import RequestWithUser from '../authentication/requestWithUser.interface';
import JwtAuthenticationGuard from '../authentication/token/jwt-authentication.guard';
import Resolve from '../common/helpers/Resolve';
import ParamsWithId from '../utils/paramsWithId';
import PostDto from './dto/post.dto';
import UpdatePostDto from './dto/updatePost.dto';
import ProductService from './production.service';

@Controller('products')
export default class PostsController {
  constructor(private readonly producService: ProductService) {}

  /**
   * Lấy ra danh sách các bài viết có trong cache
   * @public: có thể được xem bởi mọi người
   */
  // @UseGuards(RoleGuard(Role.User))
  @Get()
  async getAllPosts(
    @Query('searchQuery') searchQuery: string,
    @Query('search') search: string,
    @Query() query,
  ) {
    if (search) {
      // hide elastic search
      // return this.producService.searchForPosts(search, skip, limit);
    }
    const { result, pagination } = await this.producService.findAll(query);
    return Resolve.ok(0, 'Success', { products: result, pagination });
  }

  // /**
  //  * @private: chỉ có thể được xem bởi người đó
  //  */
  // @Get('me')
  // @UseGuards(RoleGuard(Role.User))
  // async getAllPostsByUser(
  //   @Query('searchQuery') searchQuery: string,
  //   @Query('search') search: string,
  //   @Req() req: RequestWithUser,
  //   @Query() query: QueryParse,
  // ) {
  //   if (search) {
  //     // hide elastic search
  //     // return this.producService.searchForPosts(search, skip, limit);
  //   }
  //   const { result, pagination } = await this.producService.findAll(
  //     null,
  //     searchQuery,
  //     req.user,
  //     query,
  //   );
  //   return Resolve.ok(0, 'Success', result, { pagination });
  // }

  @Get(':id')
  async getPost(@Param() { id }: ParamsWithId) {
    const response = await this.producService.findOne(id);
    return Resolve.ok(0, 'Success', response);
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard) // use two-factor authentication
  async createPost(@Body() post: PostDto, @Req() req: RequestWithUser) {
    await this.producService.create(post, req.user);
    return Resolve.ok(0, 'Success');
  }

  // @Delete(':id')
  // @UseGuards(JwtAuthenticationGuard)
  // async deletePost(@Param() { id }: ParamsWithId, @Req() req: RequestWithUser) {
  //   await this.producService.delete(id, req.user);
  //   return Resolve.ok(0, 'Success');
  // }

  @Put(':id') // meaning update all filed
  @UseGuards(JwtAuthenticationGuard)
  async updatePost(
    @Param() { id }: ParamsWithId,
    @Body() post: UpdatePostDto,
    @Req() req: RequestWithUser,
  ) {
    await this.producService.update(id, post, req.user);
    return Resolve.ok(0, 'Success');
  }

  @Patch(':id') // meaning update partial filed
  @UseGuards(JwtAuthenticationGuard)
  async updatePostByPatch(
    @Param() { id }: ParamsWithId,
    @Body() post: UpdatePostDto,
    @Req() req: RequestWithUser,
  ) {
    await this.producService.update(id, post, req.user);
    return Resolve.ok(0, 'Success');
  }
}
