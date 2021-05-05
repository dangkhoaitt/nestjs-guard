import { Controller, Get } from '@nestjs/common';
import { Roles } from 'src/auth/role.enum';
import { Role } from 'src/decorator/role.decorator';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Role(Roles.MANAGER)
  @Get()
  getAll() {
    return this.userService.getAll();
  }
}
