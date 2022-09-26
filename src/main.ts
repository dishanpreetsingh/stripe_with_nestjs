import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  console.log("listen",process.env.PORT);
  await app.listen(process.env.PORT);
}
bootstrap();
