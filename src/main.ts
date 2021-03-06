import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI });
  const port = process.env.PORT || 3001;
  await app.listen(port);
  Logger.log(`App Running on Port ${port}`);
}
bootstrap();
