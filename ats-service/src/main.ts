import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // https://ats-api-1041765018913.europe-central2.run.app

  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://ats-web-1041765018913.europe-central2.run.app',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
