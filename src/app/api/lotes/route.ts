import { Lotes, db } from '@/database';
import { NextResponseMessage } from '@/utils/api/responseMessage';
import { HttpStatusCode } from 'axios';

export async function GET() {
  try {
    await db.connect();
    const lotes = await Lotes.find().sort({ createdAt: 'desc' }).lean();
    await db.disconnect();

    return NextResponseMessage({ status: HttpStatusCode.Ok, data: lotes });
  } catch (error) {
    await db.disconnect();
    return NextResponseMessage({
      status: HttpStatusCode.BadRequest,
      message: error,
    });
  }
}
