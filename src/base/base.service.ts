import { Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { MONGODB_PROVIDER } from 'src/mongodb/mongodb.constant';

export class BaseService {
  @Inject(MONGODB_PROVIDER) protected db: Db;
}
