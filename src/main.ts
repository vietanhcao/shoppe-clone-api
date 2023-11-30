import { ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationException } from './common/exceptions/validation-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*' },
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // skipMissingProperties: false,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) =>
        new ValidationException(errors),
    }),
  );
  app.setGlobalPrefix('/api');
  await app.listen(process.env.PORT);
}
bootstrap().then(() => console.log('Service listening 👍: ', process.env.PORT));
