import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
    private readonly users: User[] = [{
        Id: 1,
        username: "henry",
        password: "whatever"
    }];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
