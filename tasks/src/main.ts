import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  // app.enableCors(); // This allows any domain access your backend

  app.enableCors({
    origin: 'http://localhost:4200',
  }); //This restricts it to just angular

  await app.listen(3000);
}
bootstrap();
