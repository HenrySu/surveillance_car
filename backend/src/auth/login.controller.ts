import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards';
import { Jwt } from './models';

@Controller('login')
export class LoginController {
    constructor(private authSvc: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post()
    login(@Request() req): Promise<Jwt> {
        return this.authSvc.login(req.user);
    }
}
