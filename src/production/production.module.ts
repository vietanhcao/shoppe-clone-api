import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Production, ProductionSchema } from './production.schema';
import ProductionController from './production.controller';
import ProductionService from './production.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Production.name, schema: ProductionSchema },
    ]),
    // CacheModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   isGlobal: true
    //   useFactory: (configService: ConfigService) => ({
    //     isGlobal: true,
    //     store: redisStore,
    //     host: configService.get('REDIS_HOST'),
    //     port: configService.get('REDIS_PORT'),
    //     ttl: 120,
    //   }),
    // }),
  ],
  controllers: [ProductionController],
  providers: [ProductionService],
  exports: [ProductionService], // export to another module used
})
class ProductionModule {}

export default ProductionModule;
