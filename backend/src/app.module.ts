import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { UsersModule } from "./api/users/users.module";
import { ProductsModule } from "./api/products/products.module";
import { join } from "path";
import { MongooseModule } from "@nestjs/mongoose";
import * as MongooseAutopopulate from "mongoose-autopopulate";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("MONGODB_URI"),
        connectionFactory: (connection) => {
          connection.plugin(MongooseAutopopulate);
          return connection;
        },
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // include: [ProductsModule, UsersModule],
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      // buildSchemaOptions: {
      //   dateScalarMode: "timestamp",
      // },
    }),
    UsersModule,
    ProductsModule,
  ],
})
export class AppModule {}
