import { roboto } from '@/app/page';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { LotDatagrid } from '@/components/composites/LotDatagrid/LotDatagrid';
import { dbLots } from '@/database';

const getData = async () => dbLots.getAllLots();

export default async function LotsAdmin() {
  const data = await getData();

  return (
    <Container maxWidth="lg" className={roboto.className}>
      <Button
        variant="text"
        color="primary"
        rel="noreferrer"
        href={`/admin/lots/new`}
        tag="a"
      >
        Crear Propiedad
      </Button>
      <LotDatagrid lots={data} />
    </Container>
  );
}
