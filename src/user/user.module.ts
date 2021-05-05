import { Module } from '@nestjs/common/decorators';
import { Collections } from 'src/mongodb/mongodb.collection';
import { MongoDbModule } from 'src/mongodb/mongodb.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MongoDbModule.useCollection(Collections.USER)],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
