import { LoteInfo } from '@/components/composites/LoteInfoPage/LoteInfoPage';
import { dbLots } from '@/database';
import { Initializer } from '@/store/Initializer';

export async function generateStaticParams() {
  const ids = await dbLots.getLotsIds();

  if (!ids) return null;

  return ids.map((id) => ({
    id: id._id,
  }));
}

const getData = async (id: string) => dbLots.getLotById(id);

export default async function LoteInfoPage({
  params,
}: {
  params: { id: string };
}) {
  const lot = await getData(params.id);

  return (
    <>
      <Initializer lot={lot} />
      <LoteInfo />
    </>
  );
}
