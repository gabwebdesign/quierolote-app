import { dbCloudinary } from '@/database';
import { NextResponseMessage } from '@/utils/api/responseMessage';
import { withExceptionFilter } from '@/utils/error/filters';
import { HttpStatusCode } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { NextRequest } from 'next/server';

interface Params {
  params?: {
    id?: string;
  };
}

export async function DELETE(req: NextRequest, params?: Params) {
  return withExceptionFilter(req, params)(removeImagen);
}

const removeImagen = async (req: NextRequest, params?: Params) => {
  const id = params?.params?.id;

  if (!id)
    throw new ApiError(
      HttpStatusCode.BadRequest,
      'Por favor especifique el id de la imagen a borrar.'
    );

  const imageExist = await dbCloudinary.checkImageInCloudinary(id);

  if (!imageExist)
    throw new ApiError(HttpStatusCode.BadRequest, 'Esa imagen no existe.');

  await dbCloudinary.deleteImage(id);

  return NextResponseMessage({
    statusCode: HttpStatusCode.NoContent,
    data: null,
  });
};
