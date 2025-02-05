import { Injectable } from "@nestjs/common";
import { Barbers } from "./barbers.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateBarbersDto } from "./BarbersDto/create-barbers.dto" ;


@Injectable()
export class BarbersService {
    private barber: Barbers[] = []
    constructor(
        
        @InjectModel(Barbers.name)
        private BarberModel: Model<Barbers>
    ) { }
    async findAll(): Promise<Barbers[]> {
        return await this.BarberModel.find().exec()
    }
    async create(createBarbersDto: CreateBarbersDto): Promise<Barbers> {
        const createdBarbers = new this.BarberModel(createBarbersDto)
        return await createdBarbers.save()
       
    }
    async delete(id:ObjectId): Promise<void>{
         await this.BarberModel.findByIdAndDelete(id)
        
    }
} 