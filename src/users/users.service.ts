import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import LocalFileDto from '../local-files/local-files.dto';
import { LocalFilesService } from '../local-files/local-files.service';
import { CreateUserDto, UpdateUserDto } from './dto/createUser.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly localFilesService: LocalFilesService,
    @InjectConnection() private readonly connection: mongoose.Connection, // connection we’ve established
  ) {}

  async setCurrentRefreshToken(refreshToken: string, userId: string) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    const user = await this.userModel.findByIdAndUpdate(
      { _id: userId },
      { currentHashedRefreshToken },
      { new: true },
    );
    if (!user) {
      throw new NotFoundException();
    }
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: string) {
    const user = await this.getById(userId);
    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken,
    );

    if (!isRefreshTokenMatching) {
      throw new UnauthorizedException('Refresh token does not match');
    }
    return user;
  }

  async removeRefreshToken(userId: number) {
    return this.userModel.findByIdAndUpdate(
      { _id: userId },
      {
        currentHashedRefreshToken: null,
      },
      { new: true },
    );
  }

  async getByEmail(email: string) {
    // const user = await this.userModel.findOne({ email }).populate({
    //   path: 'posts',
    //   populate: {
    //     path: 'categories',
    //   },
    // });
    const user = await this.userModel
      .findOne({ email })
      .select(
        'lastName firstName password avatar role isEmailConfirmed email isTwoFactorAuthenticationEnabled',
      );
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async getById(id: string) {
    // nested populate
    // const user = await this.userModel.findById(id).populate([
    //   {
    //     path: 'posts',
    //     populate: {
    //       path: 'categories',
    //     },
    //   },
    //   'files',
    // ]);
    const user = await this.userModel
      .findById(id)
      // .select(
      //   'lastName firstName avatar role currentHashedRefreshToken email twoFactorAuthenticationSecret isTwoFactorAuthenticationEnabled permissions',
      // )
      .lean();
    if (!user) {
      throw new NotFoundException('user not found');
    }
    //add property id
    user.id = user._id.toString();
    return user;
  }

  async addFileLocal(user: User, fileData: LocalFileDto) {
    await this.localFilesService.saveLocalFileData(fileData, user);

    // await this.usersRepository.update(userId, {
    //   avatarId: avatar.id,
    // });
  }

  async create(userData: CreateUserDto) {
    const createdUser = new this.userModel(userData);
    // await createdUser.populate({
    //   path: 'posts',
    //   populate: {
    //     path: 'categories',
    //   },
    // });
    return createdUser.save();
  }

  async update(dto: UpdateUserDto, user: User) {
    // put do this
    // .findByIdAndUpdate(id, postData)
    // .setOptions({ overwrite: true, new: true })
    const result = await this.userModel
      //update partial
      .findOneAndUpdate({ _id: user._id }, dto, {
        new: true,
      });
    if (!result) {
      throw new NotFoundException();
    }
    // if (result) {
    //   await this.postsSearchService.update(result);
    //   return result;
    // }
    // await this.clearCache();
    return result;
  }
}

export default UsersService;
