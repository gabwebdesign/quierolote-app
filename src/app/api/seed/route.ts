import { NextRequest, NextResponse } from 'next/server';
import { db, seedData, Lotes, Users } from '@/database';

export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({
      message: 'No tiene acceso a este API',
      status: 401,
    });
  }

  try {
    await db.connect();

    await Lotes.deleteMany();
    await Lotes.insertMany(seedData.initialData.lotes);

    await Users.deleteMany();
    await Users.insertMany(seedData.initialData.users);

    await db.disconnect();

    return NextResponse.json({
      status: 200,
      message: 'Proceso realizado correctamente',
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: `Algo salio mal. ${error}`,
    });
  }
}
