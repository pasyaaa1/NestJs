import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LogMiddlewareMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: any, res: any, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || 'tidak diketahui';
    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = req;
      const duration = Date.now() - startTime;
      const logMessege =  `[
        ${method}
        ${originalUrl} 
        Status: ${statusCode} 
        Duration: ${duration}ms
        Agent: ${userAgent} 
        IP Address: ${ip}
    ]
        `

        if (statusCode >= 500) {
          this.logger.error(logMessege);
        } else if (statusCode >= 400) {
          this.logger.warn(logMessege);
        } else {
          this.logger.log(logMessege);
        }
    })

    next();
  }
}
