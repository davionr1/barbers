import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Admin } from "./admin.entity";
import { Model, ObjectId } from "mongoose";
import { UsersService } from "src/users/users.service";
import { BarbersService } from "src/barbers/barbers.service";
import { CreateBarbersDto } from "src/barbers/BarbersDto/create-barbers.dto";
import { Barbers } from "src/barbers/barbers.entity";
import { InventoryService } from "src/inventory/inventory.service";
import { Inventory } from "src/inventory/inventory.entity";
import { CreateAdminDto } from "./AdminDto/create-AdminDto";
import { CreateInventoryDto } from "src/inventory/InventoryDto/create-inventory.dto" ;
@Injectable()


export class AdminService{
    private admin: Admin[]=[]
    constructor(
        private readonly usersService: UsersService,
        private readonly barbersService: BarbersService,
        private readonly inventoryService: InventoryService,
        @InjectModel(Admin.name)
        private AdminModel: Model<Admin>
    ){}

    async createAdmin(createAdminDto:CreateAdminDto){
        return await this.AdminModel.create(createAdminDto)
    }

    async createBarber(createBarbersDto: CreateBarbersDto):Promise<Barbers>{
        const createBarber = this.barbersService.create(createBarbersDto)
        return createBarber
    }
    async createInventory(createInventoryDto:CreateInventoryDto):Promise<Inventory>{
        return await this.inventoryService.createInventory(createInventoryDto)
    }
    async updateInventory(id:ObjectId, updatedInventory:Partial<Inventory>):Promise<Inventory>{
        const updateStock = this.inventoryService.updateStocks(id, updatedInventory)
        return updateStock
    }

    async deleteInventory(id:ObjectId):Promise<void>{
        return await this.inventoryService.deleteInventory(id)
    }

    async deleteBarber(id:ObjectId):Promise<void>{
        const deleteBarber = this.barbersService.delete(id)
        return deleteBarber
    }

}