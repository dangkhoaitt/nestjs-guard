import { Base } from 'src/base/base.interface';

export interface User extends Base {
  username?: string;
  password?: string;
  role?: number;
  name?: string;
}
