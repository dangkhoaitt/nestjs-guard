import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AuthJwtGuard } from './guard/auth-jwt.guard';
import { MongoDbModule } from './mongodb/mongodb.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongoDbModule.forRoot(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthJwtGuard,
    },
  ],
})
export class AppModule {}
