import { dbCloudinary } from '@/database';
import { NextResponseMessage } from '@/utils/api/responseMessage';
import { withExceptionFilter } from '@/utils/error/filters';
import { HttpStatusCode } from 'axios';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return withExceptionFilter(req)(uploadFile);
}

const uploadFile = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get('file') as unknown as Blob;

  if (!file) {
    return NextResponseMessage({
      statusCode: HttpStatusCode.Created,
      message: 'Imagen es requerida.',
    });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const url = await dbCloudinary.uploadImage(buffer);

  return NextResponseMessage({
    statusCode: HttpStatusCode.Ok,
    message: url,
  });
};
