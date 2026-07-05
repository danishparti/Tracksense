import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('DB_HOST:', process.env.DB_HOST);
  console.log('DB_USERNAME:', process.env.DB_USERNAME);
  console.log('DB_DATABASE:', process.env.DB_DATABASE);

  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
