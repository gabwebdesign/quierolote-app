import { HttpStatusCode } from 'axios';
import { NextResponse } from "next/server";

interface ResponseMessage<T> {
  message?: string | unknown;
  data?: T;
  status?: HttpStatusCode;
}

export const NextResponseMessage = <T>(props: ResponseMessage<T>) => {
  return NextResponse.json({...props});
}