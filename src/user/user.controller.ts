import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/decorator/public.decorator';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //@Role(Roles.MANAGER)
  @Public()
  @Get()
  getAll() {
    return this.userService.getAll();
  }
}
