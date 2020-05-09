import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { LocalAuthGuard } from './guards';
import { LocalStrategy } from './strategies';

@Module({
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "12h" }
    }),
  ],
  exports: [
    AuthService
  ],
})
export class AuthModule { }
