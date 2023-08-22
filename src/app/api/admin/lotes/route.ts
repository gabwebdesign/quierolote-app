import { Lotes, db } from '@/database';
import { NextResponseMessage } from '@/utils/api/responseMessage';
import { withExceptionFilter } from '@/utils/error/filters';
import { HttpStatusCode } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return withExceptionFilter(req)(createLote);
}

const createLote = async (req: NextRequest) => {
  const body = await req.json();

  if (!body) {
    throw new ApiError(
      HttpStatusCode.BadRequest,
      'Datos para crear una propiedad inválidos'
    );
  }

  await db.connect();
  const lote = new Lotes(body);
  await lote.save();
  await db.disconnect();

  return NextResponseMessage({ status: HttpStatusCode.Created, data: lote });
};
