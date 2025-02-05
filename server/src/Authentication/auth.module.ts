import { Module } from "@nestjs/common";
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from "./auth.controller";
import { UsersService } from "src/users/users.service";
import { SessionSerializer } from "./session.serializer" ;

@Module({
    imports:[UsersModule, PassportModule.register({session:true})],
    providers:[AuthService, LocalStrategy, SessionSerializer],
    controllers:[AuthController],
    exports:[AuthService]
})
export class AuthModule{}
