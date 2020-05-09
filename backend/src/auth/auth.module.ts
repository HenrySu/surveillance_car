import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { LoginController } from './login.controller';
import { JwtStrategy, LocalStrategy } from './strategies';

@Module({
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    LocalAuthGuard,
    JwtAuthGuard
  ],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configSvc: ConfigService) => ({
        secretOrPrivateKey: configSvc.get<string>("Jwt_Secret"),
        signOptions: { expiresIn: "12h" },
      }),
    })
  ],
  exports: [
    AuthService
  ],
  controllers: [LoginController],
})
export class AuthModule { }
