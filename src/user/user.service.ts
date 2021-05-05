import { Inject, Injectable } from '@nestjs/common';
import { Collection } from 'mongodb';
import { Collections } from 'src/mongodb/mongodb.collection';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(@Inject(Collections.USER) private collection: Collection<User>) {}

  async getAll() {
    return this.collection.find().toArray();
  }
}
