import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import * as mongoose from 'mongoose';
import { User } from '../users/schema/user.schema';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }) // like many to one relationship
  @Type(() => User)
  author: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @Type(() => User)
  modifiedBy?: User;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
