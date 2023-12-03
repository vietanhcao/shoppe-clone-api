import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Transform } from 'class-transformer';
import { Document, ObjectId } from 'mongoose';
import Role from '../../authentication/enum/role.enum';

export type UserDocument = User & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class User {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ require: true, unique: true, lowercase: true }) // unique
  email: string;

  @Prop()
  avatar: string;

  @Prop()
  date_of_birth: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  name: string;

  @Prop({ require: true })
  @Exclude()
  password: string;

  @Prop({ default: Role.User, enum: Role })
  role: Role;

  // refreshToken
  @Prop()
  @Exclude()
  currentHashedRefreshToken?: string;

  //Populating virtual properties query populate will show list (in jwt.strategy.ts) not save in UserSchema
  // @Type(() => Post)
  // posts: Post[];
}

const UserSchema = SchemaFactory.createForClass(User);
// index text search queries
UserSchema.index({ name: 'text', email: 'text' });
// UserSchema.index({ firstName: 1, lastName: 1 });//ascending index

//Populating virtual properties

export { UserSchema };
