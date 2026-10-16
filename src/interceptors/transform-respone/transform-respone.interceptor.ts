import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface StandardResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformResponeInterceptor<T> implements NestInterceptor<T, StandardResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<StandardResponse<T>> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse();
    const currentStatusCode = response.statusCode;

    return next.handle().pipe(
      map((originalData: T) => ({
        success: true,
        statusCode: currentStatusCode,
        message: 'Success',
        data: originalData 
      }))
    );
  }
}
