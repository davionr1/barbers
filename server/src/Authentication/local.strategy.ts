import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local'
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common" ;
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authservice: AuthService){
        super({
            usernameField:'name',
            passwordField:'password'
        })
    }

 async validate(name:string, password:string):Promise<any>{
   const user = await this.authservice.validateUser(name, password)
    if(!user){
        throw new UnauthorizedException()
    }
    else{
       return user
    }
    
 }
}