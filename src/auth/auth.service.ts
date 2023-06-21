import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async PasswordCompare(password: string, accPassword) {
    const isMatch = await bcrypt.compare(password, accPassword);
    return isMatch;
  }

  async signIn(email: string, password: string) {
    const account = await this.usersService.findOne(email);
    const accValid = this.PasswordCompare(password, account.password);

    if (accValid) {
      const payload = { sub: account.email, username: account.password };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
