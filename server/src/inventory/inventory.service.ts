import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Inventory } from './inventory.entity';
import { randomUUID } from 'node:crypto';
import * as mongoose from 'mongoose';
import { CreateInventoryDto } from './InventoryDto/create-inventory.dto' ;

@Injectable()
export class InventoryService {
    //store the Inventory schema into an inventories array
    private inventories: Inventory[] = []
    //allows the Inventory class to use save, find, etc through @InjectModel 
    constructor(
        @InjectModel(Inventory.name)
        private InventoryModel: Model<Inventory>
    ) { }

    async createInventory(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
        const createInventory = new this.InventoryModel(createInventoryDto)
        const result = await createInventory.save()
        
        return result
    }
    async findAll(): Promise<Inventory[]> {
        return await this.InventoryModel.find().exec()
    }
    async getInventory(): Promise<Inventory>{
        return await this.InventoryModel.findOne().exec()
    }
    //fix this at some point
    async filterInventory(p0?: { where: { OR: ({ description: { contains: string; }; price?: undefined; } | { price: { contains: string; }; description?: undefined; })[]; }; }): Promise<Inventory[]>{
        return await this.InventoryModel.find().exec()
    }
    async updateStocks(id:ObjectId, updatedInventory:Partial<Inventory>):Promise<Inventory>{
        return await this.InventoryModel.findByIdAndUpdate(id, updatedInventory, {new:true, runValidators:true})
    }
    async deleteInventory(id:ObjectId):Promise<void>{
        return await this.InventoryModel.findByIdAndDelete(id)
    }
}
