import { Users, db, dbUsers } from '@/database';
import { User } from '@/types/user';
import { NextResponseMessage } from '@/utils/api/responseMessage';
import { withExceptionFilter } from '@/utils/error/filters';
import { HttpStatusCode } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return withExceptionFilter(request)(getUsuarios);
}

const getUsuarios = async () => {
  await db.connect();
  const users = await Users.find().sort({ createdAt: 'desc' }).lean();
  await db.disconnect();

  return NextResponseMessage({ status: HttpStatusCode.Ok, data: users });
};

export async function POST(req: NextRequest) {
  return withExceptionFilter(req)(createUser);
}

const createUser = async (req: NextRequest) => {
  const body = (await req.json()) as User;

  if (!body) {
    throw new ApiError(
      HttpStatusCode.BadRequest,
      'Datos para crear una propiedad inválidos'
    );
  }

  const { email, password, phone, name } = body;

  await db.connect();
  const userInDB = await Users.findOne({ email });

  if (userInDB) {
    await db.disconnect();
    throw new ApiError(
      HttpStatusCode.BadRequest,
      'Ya hay un usuario con ese correo registrado.'
    );
  }

  const user = new Users({
    email,
    password: await dbUsers.hashPassword(password!),
    phone,
    name,
  });

  await user.save();
  await db.disconnect();

  return NextResponseMessage({ status: HttpStatusCode.Created, data: user });
};
