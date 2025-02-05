import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common" ;
import { ObjectId } from "mongoose";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    serializeUser(user_id: ObjectId, done: (err:Error, user:any)=>void): any {
        done(null,user_id)
    }
    deserializeUser(payload: any, done: (err:Error, payload:string)=> void){
        done(null, payload);
    }
}