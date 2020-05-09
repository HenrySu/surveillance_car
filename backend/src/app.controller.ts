import { Controller, Get, Post, Request, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard, JwtAuthGuard } from './auth/guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private authSvc: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post()
  login(@Request() req) {
    return this.authSvc.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getUser(@Request() req) {
    return req.user;
  }
}
