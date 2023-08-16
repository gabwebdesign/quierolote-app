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

export async function PUT(req: NextRequest, params?: Params) {
  return withExceptionFilter(req, params)(updateLoteById);
}

const updateLoteById = async (req: NextRequest, params: Params) => {
  const id = params?.params?.id;
  const body = await req.json();

  if (!body) {
    throw new ApiError(
      HttpStatusCode.BadRequest,
      'Datos para actualizar una propiedad inválidos.'
    );
  }

  if (!id || !isValidObjectId(id))
    throw new ApiError(HttpStatusCode.BadRequest, 'Id invalido.');

  await db.connect();
  const lote = await Lotes.findById(id);

  if (!lote) {
    throw new ApiError(HttpStatusCode.BadRequest, 'Lote con ese id no existe.');
  }

  //TODO UPDATE IMAGES
  // property.images.forEach(async (image) => {
  //   const imagePublicId = getImagePublicId(image);
  //   const { result } = (await images.deleteImage(imagePublicId)) as {
  //     result: string;
  //   };
  //   if (result !== 'ok') {
  //     throw new ApiError(
  //       HttpStatusCode.BadRequest,
  //       'No se pudo eliminar la imagen.'
  //     );
  //   }
  // });

  await lote.updateOne(body);
  await db.disconnect();

  return NextResponseMessage({ status: HttpStatusCode.Ok, data: lote });
};

export async function DELETE(req: NextRequest, params?: Params) {
  return withExceptionFilter(req, params)(deleteLoteById);
}

const deleteLoteById = async (req: NextRequest, params?: Params) => {
  const id = params?.params?.id;

  if (!id || !isValidObjectId(id))
    throw new ApiError(HttpStatusCode.BadRequest, 'Id invalido.');

  await db.connect();
  const lote = await Lotes.findById(id);

  if (!lote) {
    throw new ApiError(HttpStatusCode.BadRequest, 'Lote con ese id no existe.');
  }

  //TODO DELETE IMAGES
  // property.images.forEach(async (image) => {
  //   const imagePublicId = getImagePublicId(image);
  //   const { result } = (await images.deleteImage(imagePublicId)) as {
  //     result: string;
  //   };
  //   if (result !== 'ok') {
  //     throw new ApiError(
  //       HttpStatusCode.BadRequest,
  //       'No se pudo eliminar la imagen.'
  //     );
  //   }
  // });

  await lote.deleteOne();
  await db.disconnect();

  return NextResponseMessage({ status: HttpStatusCode.NoContent, data: null });
};
