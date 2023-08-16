import { ApiError } from 'next/dist/server/api-utils';
import { HttpStatusCode } from 'axios';
import { getExceptionMessage, getExceptionStack, getExceptionStatus } from './errorMethods';
import { NextRequest } from 'next/server';
import { NextResponseMessage } from '../api/responseMessage';
import { db } from '@/database';

export interface ResponseBody {
  statusCode: number;
  timestamp: string;
  url?: string;
  message: string;
  stack?: string;
}

export function withGlobalError() {
  throw new ApiError(HttpStatusCode.BadRequest, 'Metodo no soportado');
}

export function withExceptionFilter(req: NextRequest, params?: unknown) {
  return async function (handler: any) {
    try {
      return await handler(req, params);
    } catch (exception) {
      const { url } = req;
      const statusCode = getExceptionStatus(exception);
      const message = getExceptionMessage(exception);
      const stack = getExceptionStack(exception);
      const timestamp = new Date().toISOString();
      let responseBody: ResponseBody = {
        statusCode,
        timestamp,
        url,
        message,
        stack,
      };

      if (process.env.NODE_ENV === 'production') {
        responseBody = {
          statusCode,
          timestamp,
          message,
        };
      }

      db.disconnect();

      return NextResponseMessage(responseBody);
    }
  };
}
