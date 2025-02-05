import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { MongoDBModule } from './mongoDB/mongoDB.module';
import { BarbersModule } from './barbers/barbers.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './Reviews/reviews.module';
import { AdminModule } from './Admin/admin.module';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './Authentication/auth.module' ;
import { session } from 'express-session';
@Module({
  imports: [
            MongoDBModule, InventoryModule, BarbersModule, 
            UsersModule,ReviewsModule,AdminModule, AuthModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 