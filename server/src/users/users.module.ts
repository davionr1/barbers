import { Module } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
@Module({
    imports:[ConfigModule, MongooseModule.forFeature([{
        name: Users.name,
        schema: UsersSchema
    }])

],
providers:[UsersService, Users],
controllers:[UsersController],
exports:[UsersService]
})
export class UsersModule {}
 