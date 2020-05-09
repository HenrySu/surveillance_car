import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user';

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

    async login(user: User) {
        const payload = { username: user.username, sub: user.Id };
        return {
            access_token: this.jwtSvc.sign(payload);
        }
    }
}
