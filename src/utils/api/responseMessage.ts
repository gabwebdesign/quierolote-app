import { HttpStatusCode } from 'axios';
import { NextResponse } from 'next/server';

export interface ResponseMessage<T> {
  data?: T;
  status?: HttpStatusCode;
  timestamp?: string;
  url?: string;
  message?: string | unknown;
  stack?: string;
}

export const NextResponseMessage = <T>(props: ResponseMessage<T>) => {
  return new NextResponse(JSON.stringify({ ...props }), {
    status: props.status,
    headers: { 'content-type': 'application/json' },
  });
};
