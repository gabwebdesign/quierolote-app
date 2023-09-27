import { dbLots } from '@/database';
import PaginationPage from '@/components/composites/PaginationPage/PaginationPage';
import { Initializer } from '@/store/Initializer';

const getData = async () => dbLots.getAllLots();

export default async function LoteInfo() {
  const lotes = await getData();

  return (
    <>
      <Initializer lots={lotes} />
      <PaginationPage />
    </>
  );
}
