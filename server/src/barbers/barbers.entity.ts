import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose" ;
import { ObjectId } from "mongoose";

@Schema()
export class Barbers {
    _id: ObjectId;

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phone_number: string;

    @Prop({ required: true })
    pic: string;

    @Prop({require:true})
    working_hours: string

    @Prop({required:true})
    password:string;
}
export const BarbersSchema = SchemaFactory.createForClass(Barbers)