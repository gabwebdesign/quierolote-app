import { Lotes, db } from '@/database';
import { NextResponseMessage } from '@/utils/api/responseMessage';
import { withExceptionFilter } from '@/utils/error/filters';
import { HttpStatusCode } from 'axios';
import { isValidObjectId } from 'mongoose';
import { ApiError } from 'next/dist/server/api-utils';
import { NextRequest } from 'next/server';

interface Params {
  params?: {
    id?: string;
  };
}

export async function GET(req: NextRequest, params?: Params) {
  return withExceptionFilter(req, params)(getLoteById);
}

const getLoteById = async (req: NextRequest, params: Params) => {
  const id = params?.params?.id;

  if (!id || !isValidObjectId(id))
    throw new ApiError(HttpStatusCode.BadRequest, 'Id invalido.');

  await db.connect();
  const lote = await Lotes.findById(id);
  await db.disconnect();

  return NextResponseMessage({ status: HttpStatusCode.Ok, data: lote });
};
