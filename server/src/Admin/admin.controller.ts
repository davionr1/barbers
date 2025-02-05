import { Controller, Post, Body, Delete, Param, Put } from "@nestjs/common";
import { Admin } from "./admin.entity";
import { AdminService } from "./admin.service";
import { CreateBarbersDto } from "src/barbers/BarbersDto/create-barbers.dto";
import { Barbers } from "src/barbers/barbers.entity";
import { ObjectId } from "mongoose";
import { Inventory } from "src/inventory/inventory.entity";
import { CreateAdminDto } from "./AdminDto/create-AdminDto";
import { CreateInventoryDto } from "src/inventory/InventoryDto/create-inventory.dto" ;
//look into the naming conventions for the routes
@Controller('Admin') 

export class AdminController{
    constructor(private adminService: AdminService){}

    @Post('create-admin')
     createAdmin(@Body() createAdminDto: CreateAdminDto):Promise<Admin>{
        return this.adminService.createAdmin(createAdminDto);
    }

    @Post('create-barber')
     createBarber(@Body() createBarbersDto: CreateBarbersDto):Promise<Barbers>{
        return this.adminService.createBarber(createBarbersDto)
    }

    @Put('edit/:id')
     editInventory(@Param('id') id:ObjectId, @Body() updatedInventory: Partial<Inventory>): Promise<Inventory>{
        return this.adminService.updateInventory(id, updatedInventory)
    }

    @Post('create-inventory')
     createInventory(@Body() createInventoryDto: CreateInventoryDto):Promise<Inventory>{
        return  this.adminService.createInventory(createInventoryDto)
    }

    @Delete('delete-inventory')
    deleteInventory(@Param('id') id:ObjectId):Promise<void>{
        return this.adminService.deleteInventory(id)
    }

    @Delete('delete/:id')
     delete(@Param('id') id:ObjectId): Promise<void>{
        return this.adminService.deleteBarber(id)
    }

}