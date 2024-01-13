import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response';
import { TimeoutInterceptor } from './common/interceptors/timeout';
import { ParseIntPipe } from './common/pipes/parse-int';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(
    new WrapResponseInterceptor(),
    new TimeoutInterceptor(),
  );
  app.useGlobalPipes(new ParseIntPipe());
  await app.listen(3000);
}
bootstrap();
