import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigService } from "@nestjs/config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(helmet());

  const configService = app.get<ConfigService>(ConfigService);
  // swagger module
  const config = new DocumentBuilder()
    .setTitle("GraphQL Server")
    .setDescription("The server API description")
    .setVersion("1.0")
    .addTag("server")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);

  const port = configService.get("PORT");

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.listen(port, () => {
    console.log("Listening the server on port: ", port);
  });
}
bootstrap();
