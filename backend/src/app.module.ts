import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './api/users/users.module';
import { ProductsModule } from './api/products/products.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // include: [ProductsModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    ProductsModule,
  ],
})
export class AppModule {}
