import { roboto } from '@/app/page';
import { Container } from '@/components/atoms/Container/Container';
import { LoteUpdate } from '@/components/composites/LoteUpdate/LoteUpdate';
import { Lotes, dbLots } from '@/database';
import { Lote } from '@/types/lote';

interface Params {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  if (id === 'new') {
    const tempLot: Lote = JSON.parse(JSON.stringify(new Lotes()));
    delete tempLot._id;
    return tempLot;
  }

  return dbLots.getLotById(id);
};

export default async function LotsCrudPage({ params }: Params) {
  const lot = await getData(params.id);
  
  return (
    <Container maxWidth="lg" className={roboto.className}>
      <LoteUpdate lot={lot} />
    </Container>
  );
}
