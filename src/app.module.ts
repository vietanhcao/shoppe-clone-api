import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { LocalFilesModule } from './local-files/local-files.module';
import { ConfigModule } from '@nestjs/config';
import CategoriesModule from './categories/categories.module';
import ProductionModule from './production/production.module';
import PurchaseModule from './purchase/purchase.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    DatabaseModule,
    AuthenticationModule,
    LocalFilesModule,
    CategoriesModule,
    ProductionModule,
    PurchaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
