import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import RequestWithUser from '../authentication/requestWithUser.interface';
import JwtAuthenticationGuard from '../authentication/token/jwt-authentication.guard';
import Resolve from '../common/helpers/Resolve';
import LocalFilesInterceptor from '../local-files/local-files.interceptor';
import { UpdateUserDto } from './dto/createUser.dto';
import UsersService from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthenticationGuard)
  @UseInterceptors(
    LocalFilesInterceptor({
      fieldName: 'image',
      path: '',
      fileFilter: (request, file, callback) => {
        if (!file.mimetype.includes('image')) {
          return callback(
            new BadRequestException('Provide a valid image'),
            false,
          );
        }
        callback(null, true);
      },
      limits: {
        fileSize: Math.pow(1024, 2), // 1MB || 10e6
      },
    }),
  )
  @Post('upload-avatar')
  async addAvatarServerStore(
    @Req() request: RequestWithUser,
    @UploadedFile() file: Express.Multer.File,
  ) {
    // await this.usersService.addFileLocal(request.user, {
    //   path: file.path,
    //   filename: file.originalname,
    //   mimetype: file.mimetype,
    // });

    return Resolve.ok(0, 'Success', { filename: file.filename });
  }

  @UseGuards(JwtAuthenticationGuard)
  @Put() // meaning update all filed
  async updatePost(@Body() dto: UpdateUserDto, @Req() req: RequestWithUser) {
    const user = await this.usersService.update(dto, req.user);
    return Resolve.ok(0, 'Success', user);
  }
}
