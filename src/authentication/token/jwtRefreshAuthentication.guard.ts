import { Injectable } from '@nestjs/common';
import { JsonWebTokenError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtRefreshGuard extends AuthGuard('jwt-refresh-token') {
  handleRequest(err, user, info: Error, context, status) {
    console.log('info', JSON.stringify(info));
    console.log('info.message', info?.message);
    console.log('info.name', info?.name);
    // if (info instanceof JsonWebTokenError) {
    //   // case jwt expired
    //   if (info.message === 'jwt expired') {
    //     throw new UnauthorizedException('EXPIRED_TOKEN');
    //   }
    //   throw new UnauthorizedException('Invalid Token!');
    // }

    return super.handleRequest(err, user, info, context, status);
  }
}
