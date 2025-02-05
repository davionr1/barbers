import { ObjectId } from "mongoose";
export class CreateAdminDto {
    readonly _id: ObjectId;
    readonly name: string;
    readonly email: string;
    readonly password: string
} 