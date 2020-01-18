import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const port = parseInt(process.env.PORT, 10) || 4200;
  const app = await NestFactory.create(ApplicationModule);

  app.setGlobalPrefix('api');
  await app.listen(port);

  console.log("App listening on port " + port);
}

bootstrap();
