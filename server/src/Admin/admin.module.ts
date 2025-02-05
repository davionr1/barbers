import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Admin, AdminSchema } from "./admin.entity";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.service";
import { UsersService } from "src/users/users.service";
import { BarbersService } from "src/barbers/barbers.service";
import { Users, UsersSchema } from "src/users/users.entity";
import { Barbers, BarbersSchema } from "src/barbers/barbers.entity";
import { Inventory, InventorySchema } from "src/inventory/inventory.entity" ;
import { InventoryService } from "src/inventory/inventory.service";
@Module({
    imports: [ MongooseModule.forFeature([
        {
            name: Admin.name,
            schema: AdminSchema
        },
        {
            name: Users.name,
            schema:UsersSchema
        },
        {
            name:Barbers.name,
            schema: BarbersSchema
        },
        {
            name:Inventory.name,
            schema: InventorySchema
        },

    ]),
],
    providers: [AdminService,UsersService,BarbersService,InventoryService],
    controllers: [AdminController],
    exports: []
})
export class AdminModule { }