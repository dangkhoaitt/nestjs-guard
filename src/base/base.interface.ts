import { ObjectId } from 'bson';

export interface Base {
  _id?: ObjectId | string;
}
