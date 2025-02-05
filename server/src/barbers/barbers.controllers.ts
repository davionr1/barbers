import { Controller, Get, Post, Param } from "@nestjs/common";
import { Barbers } from "./barbers.entity";
import { BarbersService } from "./barbers.service";
import { Body } from '@nestjs/common';
import { CreateBarbersDto } from "./BarbersDto/create-barbers.dto" ;

@Controller('barbers')
export class BarbersController {
    constructor(private barbersService: BarbersService) { }

    @Get('all')
    async getAllBarbers(): Promise<Barbers[]> {
        return this.barbersService.findAll()
    }
    @Post('create')
    async createBarbers(@Body() createBarbersDto: CreateBarbersDto):Promise<Barbers>{
        return this.barbersService.create(createBarbersDto)
    }

}