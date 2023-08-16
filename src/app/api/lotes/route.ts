import { Lotes, db } from '@/database';
import { NextResponseMessage } from '@/utils/api/responseMessage';
import { withExceptionFilter } from '@/utils/error/filters';
import { HttpStatusCode } from 'axios';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return withExceptionFilter(request)(getLotes);
}

const getLotes = async () => {
  await db.connect();
  const lotes = await Lotes.find().sort({ createdAt: 'desc' }).lean();
  await db.disconnect();

  return NextResponseMessage({ status: HttpStatusCode.Ok, data: lotes });
};
