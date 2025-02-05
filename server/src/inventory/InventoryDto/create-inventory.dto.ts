import { ObjectId } from "mongoose" ;

export class CreateInventoryDto{
    readonly _id:ObjectId;
    readonly name:string;
    readonly description: string;
    readonly price: number;
    
}