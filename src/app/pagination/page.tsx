import { dbLots } from '@/database';
import PaginationPage from '@/components/composites/PaginationPage/PaginationPage';
import { LotsInitialiazer } from '@/components/initaliazers/lots';

const getData = async () => dbLots.getAllLots();

export default async function LoteInfo() {
  const lotes = await getData();

  return (
    <>
      <LotsInitialiazer lots={lotes} />
      <PaginationPage />
    </>
  );
}
