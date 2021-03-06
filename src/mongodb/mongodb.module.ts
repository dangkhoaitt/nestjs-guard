import { DynamicModule, Module, Provider } from '@nestjs/common';
import { Collection, Db, MongoClient, MongoClientOptions } from 'mongodb';
import { MONGODB_PROVIDER } from './mongodb.constant';

@Module({})
export class MongoDbModule {
  static forRoot(uri: string, options?: MongoClientOptions): DynamicModule {
    const mongoProvider: Provider = {
      provide: MONGODB_PROVIDER,
      useFactory: async function(): Promise<Db> {
        const connect = await MongoClient.connect(uri, options);
        return connect.db();
      },
    };
    return {
      global: true,
      providers: [mongoProvider],
      exports: [mongoProvider],
      module: MongoDbModule,
    };
  }

  static useCollection(collectionName: string): DynamicModule {
    const collectionProvider: Provider = {
      provide: collectionName,
      useFactory: function(db: Db): Collection {
        return db.collection(collectionName);
      },
      inject: [MONGODB_PROVIDER],
    };
    return {
      providers: [collectionProvider],
      exports: [collectionProvider],
      module: MongoDbModule,
    };
  }
}
