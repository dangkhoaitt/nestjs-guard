import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/guard/auth-jwt.strategy';
import { Collections } from 'src/mongodb/mongodb.collection';
import { MongoDbModule } from 'src/mongodb/mongodb.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    MongoDbModule.useCollection(Collections.USER),
    JwtModule.register({
      secret: 'auth-guard',
      signOptions: { expiresIn: 1800 },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
