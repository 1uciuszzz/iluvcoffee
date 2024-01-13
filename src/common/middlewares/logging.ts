import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: any, res: Response, next: (error?: any) => void) {
    console.log('Request...');
    console.time('Request-response time');
    res.on('finish', () => console.timeEnd('Request-response time'));
    next();
  }
}
