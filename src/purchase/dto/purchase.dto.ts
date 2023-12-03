import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  product_id: string;

  @IsNumber()
  @IsNotEmpty()
  buy_count: string;
}

export default CategoryDto;
