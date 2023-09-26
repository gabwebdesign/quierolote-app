import { Lotes, db } from '@/database';
import { NextResponseMessage } from '@/utils/api/responseMessage';
import { sendEmail } from '@/utils/email/sendEmail';
import { withExceptionFilter } from '@/utils/error/filters';
import { HttpStatusCode } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return withExceptionFilter(req)(createLote);
}

const createLote = async (req: NextRequest) => {
  const formData = await req.formData();

  if (!formData) {
    throw new ApiError(
      HttpStatusCode.BadRequest,
      'Datos para enviar email inválidos'
    );
  }

  const info = await sendEmail();

  console.log({info})

  return NextResponseMessage({ status: HttpStatusCode.Ok, data: 'Email Enviado' });
};
