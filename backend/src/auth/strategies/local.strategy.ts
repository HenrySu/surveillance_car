import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authSvc: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authSvc.validateUser(username, password);
        if (user) {
            return user;
        }
        throw new UnauthorizedException();
    }
}