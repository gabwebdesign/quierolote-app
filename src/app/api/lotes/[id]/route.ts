import { NextResponseMessage } from '@/utils/api/responseMessage';
import { NextRequest } from 'next/server';

interface Params {
  params?: {
    id?: string
  };
}

export async function GET(request: NextRequest, params?: Params) {
  return NextResponseMessage({ status: 200, message: 'Hello World' });
}
