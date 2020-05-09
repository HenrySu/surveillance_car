import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user';
import { Payload } from './models/payload.interface';
import { Jwt } from './models';

@Injectable()
export class AuthService {
    constructor(private usersSvc: UsersService,
        private jwtSvc: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersSvc.findOne(username);
        if (user?.password === password) {
            return username;
        }

        return undefined;
    }

    async login(user: User): Promise<Jwt> {
        const payload: Payload = { username: user.username, sub: user.Id };
        return {
            accessToken: this.jwtSvc.sign(payload)
        }
    }
}
