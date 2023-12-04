import {
  Body,
  CacheStore,
  CACHE_MANAGER,
  Controller,
  Get,
  HttpCode,
  Inject,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import * as _ from 'lodash';
import { omit } from 'lodash';
import { CacheBuilder } from '../common/builder/cache.builder';
import { StrategyKey } from '../common/constant';
import Resolve from '../common/helpers/Resolve';
import UsersService from '../users/users.service';
import { AuthenticationService } from './authentication.service';
import RegisterDto, { ChangePasswordDto } from './dto/register.dto';
import RequestWithUser from './requestWithUser.interface';
import JwtAuthenticationGuard from './token/jwt-authentication.guard';
import { JwtRefreshGuard } from './token/jwtRefreshAuthentication.guard';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly usersService: UsersService,
    // import another service
    @Inject(CACHE_MANAGER)
    private readonly cacheStore: CacheStore,
  ) {}

  //dto validation
  @Post('register')
  @UsePipes(ValidationPipe)
  async register(
    @Body() registrationData: RegisterDto,
    @Req() request: Request,
  ) {
    const user = await this.authenticationService.register(registrationData);

    const accessTokenCookie =
      this.authenticationService.getCookieWithJwtAccessToken(user.id);
    const refreshTokenCookie =
      this.authenticationService.getCookieWithJwtRefreshToken(user.id);

    await this.usersService.setCurrentRefreshToken(
      refreshTokenCookie.token,
      user.id,
    );
    request.res.setHeader('Set-Cookie', [
      accessTokenCookie.cookie,
      refreshTokenCookie.cookie,
    ]);
    //remove password
    user.password = undefined;

    // response cookie and token;
    return Resolve.ok(200, 'Success', {
      user,
      accessToken: accessTokenCookie.token,
      refreshToken: refreshTokenCookie.token,
    });
  }

  /**
   * @desc  @LocalAuthenticationGuard will be triggered @LocalStrategy => @getAuthenticatedUser => user per request
   * @route Production /authentication/log-in
   * @access public
   */
  // @UseGuards(LocalAuthenticationGuard)
  @UseGuards(AuthGuard(StrategyKey.LOCAL.ADMIN))
  @Post('login')
  async logIn(@Req() request: RequestWithUser) {
    const { user } = request;
    const accessTokenCookie =
      this.authenticationService.getCookieWithJwtAccessToken(user.id);
    const refreshTokenCookie =
      this.authenticationService.getCookieWithJwtRefreshToken(user.id);

    await this.usersService.setCurrentRefreshToken(
      refreshTokenCookie.token,
      user.id,
    );
    request.res.setHeader('Set-Cookie', [
      accessTokenCookie.cookie,
      refreshTokenCookie.cookie,
    ]);
    //remove password
    user.password = undefined;

    // response cookie and token;
    return Resolve.ok(200, 'Success', {
      user,
      accessToken: accessTokenCookie.token,
      refreshToken: refreshTokenCookie.token,
    });
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@Req() request: RequestWithUser) {
    const accessTokenCookie =
      this.authenticationService.getCookieWithJwtAccessToken(request.user.id);
    request.res.setHeader('Set-Cookie', accessTokenCookie.cookie);
    return Resolve.ok(200, 'success', {
      user: _.omit(request.user, ['currentHashedRefreshToken', 'password']),
      accessToken: accessTokenCookie.token,
    });
  }

  @HttpCode(200)
  @UseGuards(JwtAuthenticationGuard)
  @Post('logout')
  async logOut(@Req() request: RequestWithUser, @Res() response: Response) {
    await this.usersService.removeRefreshToken(request.user.id);
    response.setHeader(
      'Set-Cookie',
      this.authenticationService.getCookiesForLogOut(),
    );
    return response.json(Resolve.ok(200, 'success'));
  }

  //dto validation
  @Put('change-password')
  @UseGuards(JwtAuthenticationGuard)
  async changePassword(
    @Body() dto: ChangePasswordDto,
    @Req() request: RequestWithUser,
  ) {
    await this.authenticationService.changePassword(dto, request.user);

    return Resolve.ok(200, 'Successs');
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get('me')
  async authenticate(@Req() request: RequestWithUser) {
    // cache builder
    const builder = new CacheBuilder();
    const callback = () => {
      return omit(request.user, ['password', 'currentHashedRefreshToken']);
    };
    const cacheKey = `auth:${request.user.email}`;
    const user = await builder
      .setCacheKey(cacheKey)
      .setCacheStore(this.cacheStore)
      .setCallback(callback)
      .ttl(1)
      .build<string>();

    return Resolve.ok(200, 'Success', user);
  }

  // @UseGuards(JwtAuthenticationGuard)
  // @UseGuards(RoleGuard(Role.Admin))
  // @Delete(':id')
  // async deletePost(@Param() { id }: ParamsWithId) {
  //   await this.authenticationService.deleteUserById(id);
  //   return Resolve.ok(200, 'Success');
  // }
}
