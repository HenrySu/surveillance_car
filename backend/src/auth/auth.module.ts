import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { LocalStragety } from './stragety.local';

@Module({
  providers: [AuthService, LocalStragety, LocalAuthGuard],
  imports: [UsersModule, PassportModule]
})
export class AuthModule { }
