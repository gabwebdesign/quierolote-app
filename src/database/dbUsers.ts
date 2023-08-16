import bcrypt from 'bcryptjs';
import { Users, db } from './';
import { User } from '@/types/user';

export const checkUserEmailPassword = async (
  email: string,
  password: string
) => {
  await db.connect();
  const user = await Users.findOne({ email });
  await db.disconnect();

  if (!user) {
    return null;
  }

  if (!bcrypt.compareSync(password, user.password!)) {
    return null;
  }

  const { role, name, _id, phone, picture } = user;

  return {
    id: _id,
    email: email.toLocaleLowerCase(),
    role,
    name,
    phone,
    picture,
  };
};

export const checkPasswordById = async (
  id: string,
  password: string
): Promise<string | true> => {
  await db.connect();
  const user = await Users.findById(id);

  if (!user) {
    await db.disconnect();
    return 'Id del usuario invalido.';
  }

  if (bcrypt.compareSync(password, user.password!)) {
    return 'La contrasena debe ser diferente a la anterior.';
  }

  return true;
};

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const getAllUsers = async (): Promise<User> => {
  await db.connect();
  const users = await Users.find().select('phone email picture name').lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(users));
};
