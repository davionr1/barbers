import { Controller, Get, Post, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.entity';
import { Body } from '@nestjs/common';
import { CreateInventoryDto } from './InventoryDto/create-inventory.dto' ;

@Controller('shop')
export class InventoryController {
    constructor(private inventoryService: InventoryService) { }

    @Get('inventory')
    async getAllInventory(): Promise<Inventory[]> {
        return this.inventoryService.findAll()
    }
    // @Post('create')
    // create(@Body() createInventoryDto: CreateInventoryDto) {
    //     return this.inventoryService.createInventory(createInventoryDto);
    // }
    @Get('inventory/:id')
    async getInventory(@Param('id') id: string): Promise<Inventory> {
        return this.inventoryService.getInventory()
    }
    //fix this at some point
    @Get('fltered-inventory/:search')
    async getFilteredInventory(@Param('search') search: string): Promise<Inventory[]> {
        return this.inventoryService.filterInventory({
            where: {
                OR: [
                    {
                        description: { contains: search },
                    },
                    {
                        price: { contains: search }
                    }
                ]
            }
        })
    }
}

