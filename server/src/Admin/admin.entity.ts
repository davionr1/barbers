import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose" ;
import { ObjectId } from "mongoose";

@Schema()
export class Admin {

    _id:ObjectId;

    @Prop({required:true})
    name:string;

    @Prop({require:true})
    email:string;

    @Prop({required:true})
    password:string;

    @Prop({default:"Admin"})
    role: string;

}

export const AdminSchema = SchemaFactory.createForClass(Admin)