import { ObjectId } from "mongoose" ;

export class CreateBarbersDto{
     readonly _id:ObjectId;
     readonly name:string;
     readonly email:string;
     readonly phone_number:string;
     readonly pic:string;
     readonly password:string;
}