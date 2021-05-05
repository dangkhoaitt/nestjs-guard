import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorator/public.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  getAll(@Body() body) {
    return this.authService.checkLogin(body);
  }
}
