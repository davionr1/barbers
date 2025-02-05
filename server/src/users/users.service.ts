import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Users } from "./users.entity";
import { Model, ObjectId } from "mongoose";
import { CreateUsersDto } from "./UsersDto/create-users";
import * as mongoose from "mongoose";
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
    private users: Users[] = []
    constructor(
        //parameters to allow Users class to use save, find, etc through InjectModel
        @InjectModel(Users.name)
        //stores the User class into a private class UsersModel to be used within this class
        private UsersModel: Model<Users>
    ) { }
    
    async loginByUsername(name: string): Promise<any> {
        return await this.UsersModel.find({ name }).exec()
    }

 

    async createUser(createUsersDto: CreateUsersDto): Promise<Users> {
        const salt = await bcrypt.genSalt(10)
        console.log(salt);

        const hashedPassword = await bcrypt.hash(createUsersDto.password, salt)
        console.log(hashedPassword);

        //send the createUserDto into the variable user
        const user = new this.UsersModel({ ...createUsersDto, password: hashedPassword })
        console.log(user);

        //now that its a variable, use the save function from mongoose 

        return user.save()
    }
    async deleteUser(id: ObjectId): Promise<Users> {
        return await this.UsersModel.findByIdAndDelete(id)


    }
    //finish this function up
    async updateUser(id: ObjectId): Promise<Users> {
        return await this.UsersModel.findByIdAndUpdate(id)


    }


}