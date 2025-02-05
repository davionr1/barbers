import { Schema,SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Reviews{
    
}
export const ReviewSchema = SchemaFactory.createForClass(Reviews) 