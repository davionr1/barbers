import { Module } from '@nestjs/common';
import { Inventory, InventorySchema } from './inventory.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller' ;

@Module({
    imports: [
        
        MongooseModule.forFeature([
            {
                name: Inventory.name,
                schema: InventorySchema,
            }
        ])
    ],
    providers: [InventoryService, Inventory],
    controllers: [InventoryController],
    exports: [InventoryService]
})

export class InventoryModule {}
