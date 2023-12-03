import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Transform, Type } from 'class-transformer';
import * as mongoose from 'mongoose';
import { User } from '../users/schema/user.schema';
import { Production } from '../production/production.schema';
import { STATUS_PURCHASE } from './types/purchase';

export type PurchaseDocument = Purchase & Document;

@Schema()
export class Purchase {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({ type: Number, default: 0 })
  price: number;

  @Prop({ type: Number, default: 0 })
  price_before_discount: number;

  @Prop({ type: Number, default: 0 })
  buy_count: number;

  @Prop({ type: Number, default: STATUS_PURCHASE.IN_CART })
  status: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }) // like many to one relationship
  @Type(() => User)
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Production' })
  @Type(() => Production)
  product?: Production;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
