import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { LotDatagrid } from '@/components/composites/LotDatagrid/LotDatagrid';
import { dbLots } from '@/database';
import { roboto } from '@/utils/css/utilities';

const getData = async () => dbLots.getAllLots();

export default async function LotsAdmin() {
  const data = await getData();

  return (
    <Container maxWidth="lg" className={roboto.className}>
      <Button
        variant="contained"
        color="primary"
        rel="noreferrer"
        href={`/admin/lots/new`}
        tag="a"
      >
        Crear Lote
      </Button>
      <LotDatagrid lots={data} />
    </Container>
  );
}
