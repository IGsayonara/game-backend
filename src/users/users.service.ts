import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.model';
import { getConfigParseResult } from 'ts-loader/dist/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async checkUser(username: string) {
    console.log(123);
    const res = await this.usersRepository.count({
      where: {
        name: username,
      },
    });
    console.log(res);
    return res;
  }
}
