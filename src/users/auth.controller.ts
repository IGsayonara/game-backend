import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly UsersService: UsersService) {}

  @Get('sign-up')
  signUp(): Promise<number> {
    return this.UsersService.checkUser('nya');
  }
}
