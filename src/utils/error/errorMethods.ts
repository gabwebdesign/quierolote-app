import { HttpStatusCode } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import mongoose from 'mongoose';

export function getExceptionStatus(exception: unknown) {
  return exception instanceof ApiError
    ? exception.statusCode
    : HttpStatusCode.InternalServerError;
}

export function getExceptionMessage(exception: unknown) {
  let error = 'Internal Server Error';

  if (exception instanceof mongoose.Error.ValidationError) {
    error = getMongooseError(exception);
  } else if (isError(exception)) {
    error = exception.message;
  }

  return error;
}

export function getExceptionStack(exception: unknown) {
  return isError(exception) ? exception.stack : undefined;
}

export function isError(exception: unknown): exception is Error {
  return exception instanceof Error;
}

export function getMongooseError(
  error: mongoose.Error.ValidationError
): string {
  const identifier = error.message.split(':')[1].trim();
  const mongooseError = error.errors[identifier].message;
  console.log({ mongooseError });
  return mongooseError;
}
