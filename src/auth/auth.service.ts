import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';
import { Collection } from 'mongodb';
import { Collections } from 'src/mongodb/mongodb.collection';
import { User } from 'src/user/user.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject(Collections.USER) private userCollection: Collection<User>,
    private jwtService: JwtService,
  ) {}

  async checkLogin(body) {
    const user = await this.userCollection.findOne({ username: body.username });
    if (user && compareSync(body.password, user.password)) {
      const payload = {
        username: user.username,
        id: user._id,
        role: user.role,
      };

      return {
        id: user._id,
        username: user.username,
        name: user.name,
        access_token: this.jwtService.sign(payload),
      };
    }

    throw new HttpException(
      'tài khoản mật khẩu không đúng!',
      HttpStatus.BAD_REQUEST,
    );
  }
}
