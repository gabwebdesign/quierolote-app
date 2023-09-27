import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { UserDatagrid } from '@/components/composites/UserDatagrid/UserDatagrid';
import { dbUsers } from '@/database';
import { roboto } from '@/utils/css/utilities';

const getData = async () => dbUsers.getAllUsers();

export default async function UsersAdmin() {
  const data = await getData();

  return (
    <Container maxWidth="lg" className={roboto.className}>
      <Button
        variant="contained"
        color="primary"
        rel="noreferrer"
        href={`/admin/users/new`}
        tag="a"
      >
        Crear Usuario
      </Button>
      <UserDatagrid users={data} />
    </Container>
  );
}
