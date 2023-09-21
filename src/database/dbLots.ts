import { Lote } from '@/types/lote';
import { Lotes, db } from '.';

export const getAllLots = async (): Promise<Lote[] | null> => {
  await db.connect();
  const lots = await Lotes.find().lean();
  await db.disconnect();

  if (!lots) {
    return null;
  }

  return JSON.parse(JSON.stringify(lots));
};

export const getLotById = async (id: string): Promise<Lote | null> => {
  await db.connect();
  const lote = await Lotes.findById(id)
    // .populate('user', POPULATE_INFO_USER)
    .lean();
  await db.disconnect();

  if (!lote) {
    return null;
  }

  return JSON.parse(JSON.stringify(lote));
};
