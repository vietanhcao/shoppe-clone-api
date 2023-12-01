import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../users/schema/user.schema';
import { Transform, Type } from 'class-transformer';
import { Category } from '../categories/category.schema';

export type ProductionDocument = Production & Document;

@Schema({ timestamps: true })
export class Production {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  name: string;

  @Prop({ type: Number, default: 0 })
  price: number;

  @Prop({ type: Number, default: 0 })
  rating: number;

  @Prop({ type: Number, default: 0 })
  price_before_discount: number;

  @Prop({ type: Number, default: 0 })
  quantity: number;

  @Prop({ type: Number, default: 0 })
  sold: number;

  @Prop({ type: Number, default: 0 })
  view: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' }) // like many to one relationship User have many posts
  @Type(() => User)
  author?: User;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop([{ type: String, maxlength: 1000 }])
  images: string[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }], // like many to many relationship Category have many posts
  })
  @Type(() => Category)
  category: Category;
}

const ProductionSchema = SchemaFactory.createForClass(Production);

ProductionSchema.index({ title: 'text', content: 'text' });

export { ProductionSchema };
