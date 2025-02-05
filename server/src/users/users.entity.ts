import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongoose";

@Schema()
export class Users{
    
    _id: ObjectId;

    @Prop({ required: true })
    name:string;

    @Prop({ required: true })
    email:string;

    @Prop({ required: true })
    password:string;

    @Prop({default: 'User'})
    role: string;
}
export const UsersSchema = SchemaFactory.createForClass(Users) 