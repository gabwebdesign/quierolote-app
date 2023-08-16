import { HttpStatusCode } from 'axios';
import { NextResponse } from "next/server";
import { ResponseBody } from '../error/filters';

interface ResponseMessage<T> {
  message?: string | unknown;
  data?: T;
  status?: HttpStatusCode;
}

export const NextResponseMessage = <T>(props: ResponseMessage<T> | ResponseBody) => {
  return NextResponse.json({...props});
}