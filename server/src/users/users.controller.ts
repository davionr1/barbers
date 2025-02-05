import { Controller, Get, Post, Delete, Body, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { Users } from "./users.entity";
import { CreateBarbersDto } from "src/barbers/BarbersDto/create-barbers.dto";
import { CreateUsersDto } from "./UsersDto/create-users";
import { ObjectId } from "mongoose";
import { Param } from "@nestjs/common";
@Controller('Users')

export class UsersController{
    constructor(private usersService: UsersService){}

    @Post('create')
    async createUser(@Body() createUsersDto: CreateUsersDto): Promise<Users>{
        return this.usersService.createUser(createUsersDto)
    }
    @Delete('delete')
    async deleteUser(id:ObjectId){
        return this.usersService.deleteUser(id)
    }
    @Put()
    async updateUser(id:ObjectId){
        return this.usersService.updateUser(id)
    }
} 