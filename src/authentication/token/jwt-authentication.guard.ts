import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JsonWebTokenError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export default class JwtAuthenticationGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info: Error, context, status) {
    if (info instanceof JsonWebTokenError) {
      // case jwt expired
      if (info.message === 'jwt expired') {
        throw new UnauthorizedException('EXPIRED_TOKEN');
      }
      throw new UnauthorizedException('Invalid Token!');
    }

    return super.handleRequest(err, user, info, context, status);
  }
}
