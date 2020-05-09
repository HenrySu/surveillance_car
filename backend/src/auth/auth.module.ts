import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { LocalAuthGuard } from './guards';
import { LocalStragety } from './stragety.local';

@Module({
  providers: [AuthService, LocalStragety, LocalAuthGuard],
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
