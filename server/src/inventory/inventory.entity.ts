import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose" ;
import { ObjectId } from "mongoose";


@Schema()
export class Inventory {
    _id: ObjectId;

    @Prop({ required: true })
    name: string
    
    @Prop()
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({required:true})
    img: string;

    @Prop({require:true})
    stock:number;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory)
