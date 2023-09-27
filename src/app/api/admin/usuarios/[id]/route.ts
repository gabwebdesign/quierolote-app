import { Lotes, Users, db, dbUsers } from '@/database';
import { User } from '@/types/user';
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
  return withExceptionFilter(req, params)(updateUsuarioById);
}

const updateUsuarioById = async (req: NextRequest, params: Params) => {
  const id = params?.params?.id;
  const body = (await req.json()) as User;

  if (!body) {
    throw new ApiError(
      HttpStatusCode.BadRequest,
      'Datos para actualizar una usuario inválidos.'
    );
  }

  if (!id || !isValidObjectId(id))
    throw new ApiError(HttpStatusCode.BadRequest, 'Id invalido.');

  const { role, name, phone, password } = body;

  if (password) {
    const res = await dbUsers.checkPasswordById(id, password);

    if (typeof res === 'string') {
      throw new ApiError(HttpStatusCode.BadRequest, res);
    }
  }

  await db.connect();
  const user = await Users.findById(id);

  if (!user) {
    await db.disconnect();
    throw new ApiError(
      HttpStatusCode.BadRequest,
      'No hay un usuario con ese id'
    );
  }

  await user.updateOne({
    role,
    name,
    phone,
    ...(password && { password: await dbUsers.hashPassword(password) }),
  });
  await db.disconnect();

  return NextResponseMessage({ status: HttpStatusCode.Ok, data: user });
};

export async function DELETE(req: NextRequest, params?: Params) {
  return withExceptionFilter(req, params)(deleteUsuarioById);
}

const deleteUsuarioById = async (req: NextRequest, params?: Params) => {
  const id = params?.params?.id;

  if (!id || !isValidObjectId(id))
    throw new ApiError(HttpStatusCode.BadRequest, 'Id invalido.');

  await db.connect();
  const user = await Users.findById(id);

  if (!user) {
    throw new ApiError(
      HttpStatusCode.BadRequest,
      'Usuario con ese id no existe.'
    );
  }

  await user.deleteOne();
  await db.disconnect();

  return new Response(null, { status: HttpStatusCode.NoContent });
};
