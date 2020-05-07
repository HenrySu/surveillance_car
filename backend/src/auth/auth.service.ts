import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersSvc: UsersService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersSvc.findOne(username);
        if (user?.password === password) {
            return username;
        }

        return undefined;
    }
}
