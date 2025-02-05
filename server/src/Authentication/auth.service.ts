import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { UsersService } from "src/users/users.service" ;
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) { }

    // async authenticate(name:string,password){
    //     const user = await this.validateUser(name,password)
    //     if (!user){
    //         return new UnauthorizedException
    //     }
    //     else {
    //         return {
    //             _id:user._id,
    //             name:user.name
    //         }
    //     }
    // }

    async validateUser(name: string, password: string): Promise<any> {
        const user = await this.userService.loginByUsername(name)
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
    
        const isPasswordValid = await bcrypt.compare(password, user[0].password)
            if (isPasswordValid) {
                const { password, name, ...rest } = user[0]
                return rest
            }
            throw new UnauthorizedException('invalid')
    }

}

