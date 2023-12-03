import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ProductionModule from '../production/production.module';
import PurchaseController from './purchase.controller';
import { Purchase, PurchaseSchema } from './purchase.schema';
import PurchaseService from './purchase.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Purchase.name, schema: PurchaseSchema },
    ]),
    ProductionModule,
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService],
  exports: [PurchaseService],
})
class PurchaseModule {}

export default PurchaseModule;
