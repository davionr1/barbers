import { CanActivate, Injectable, ExecutionContext, UnauthorizedException } from "@nestjs/common" ;
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationGuard implements CanActivate{
    async canActivate(context: ExecutionContext)  {
        const request = context.switchToHttp().getRequest();
        return request.isAuthenticated()
        
    }
}