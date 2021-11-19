import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  let port = 3000
  if(process.env.NODE_ENV === 'production'){
    port = 5000
  }
  await app.listen(port);
}
bootstrap();
