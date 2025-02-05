import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { AuthDto } from './AuthDto/auth.dto';
import { LocalStrategy } from './local.strategy';
import { AuthenticationGuard } from './authenticationGuard' ; 
import * as passport from 'passport'

@Controller()
export class AuthController {
  constructor(
    private authService:AuthService,
    private localStrategy:LocalStrategy

  ){}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req):Promise<any> {
    return {message:'logged in', user: req.user};
  }

  @UseGuards(LocalAuthGuard)
  @Post('logout')
  async logout(@Request() req){
    return {message:'logged out', user:req.logout()}
  }

  @UseGuards(AuthenticationGuard)
  @Get('protected')
  async getLogin(@Request() req):Promise<string>{
    return  req.user
  }
}