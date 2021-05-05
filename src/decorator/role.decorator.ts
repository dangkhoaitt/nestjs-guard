import { SetMetadata } from '@nestjs/common';
import { Roles } from 'src/auth/role.enum';

export const ROLE_KEY = 'roles';
export const Role = (...roles: Roles[]) => SetMetadata(ROLE_KEY, roles);
