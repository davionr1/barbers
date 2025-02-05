import { Module } from '@nestjs/common';
import { MongoDBModule } from 'src/mongoDB/mongoDB.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { BarbersSchema } from './barbers.entity';
import { Barbers } from './barbers.entity';
import { BarbersService } from './barbers.service';
import { BarbersController } from './barbers.controllers' ;
@Module({
    imports:[MongooseModule.forFeature([{
        name:Barbers.name,
        schema: BarbersSchema,
    }])],
providers :[BarbersService, Barbers],
controllers:[BarbersController],
exports:[BarbersService]
})
export class BarbersModule {}
