import { dbCloudinary } from '@/database';
import { NextResponseMessage } from '@/utils/api/responseMessage';
import { withExceptionFilter } from '@/utils/error/filters';
import { HttpStatusCode } from 'axios';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return withExceptionFilter(req)(uploadFile);
}

const saveFile = async (file: Buffer): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    await dbCloudinary.cd.uploader
    .upload_stream({ resource_type: 'image' }, function (error, result) {
      if (error) reject(error.message);

      resolve(result?.secure_url!);
    })
    .end(file);
  })
};

const uploadFile = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get('file') as unknown as Blob;

  if (!file) {
    return NextResponseMessage({
      statusCode: HttpStatusCode.Ok,
      message: 'Imagen es requerida.',
    });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const url = await saveFile(buffer);

  return NextResponseMessage({
    statusCode: HttpStatusCode.Ok,
    message: url,
  });
};
