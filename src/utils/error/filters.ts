import { ApiError } from 'next/dist/server/api-utils';
import { HttpStatusCode } from 'axios';
import { getExceptionMessage, getExceptionStack, getExceptionStatus } from './errorMethods';
import { NextRequest } from 'next/server';
import { NextResponseMessage, ResponseMessage } from '../api/responseMessage';
import { db } from '@/database';

export function withGlobalError() {
  throw new ApiError(HttpStatusCode.BadRequest, 'Metodo no soportado');
}

export function withExceptionFilter(req: NextRequest, params?: unknown) {
  return async function (handler: any) {
    try {
      return await handler(req, params);
    } catch (exception) {
      const { url } = req;
      const status = getExceptionStatus(exception);
      const message = getExceptionMessage(exception);
      const stack = getExceptionStack(exception);
      const timestamp = new Date().toISOString();
      let responseBody: ResponseMessage<void> = {
        status,
        timestamp,
        url,
        message,
        stack,
      };

      if (process.env.NODE_ENV === 'production') {
        responseBody = {
          status,
          timestamp,
          message,
        };
      }

      db.disconnect();

      return NextResponseMessage(responseBody);
    }
  };
}
