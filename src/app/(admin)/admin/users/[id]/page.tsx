import { Container } from '@/components/atoms/Container/Container';
import { LoteUpdate } from '@/components/composites/LoteUpdate/LoteUpdate';
import { UserUpdate } from '@/components/composites/UserUpdate/UserUpdate';
import { Lotes, dbLots, dbUsers } from '@/database';
import { Lote } from '@/types/lote';
import { User } from '@/types/user';
import { roboto } from '@/utils/css/utilities';

interface Params {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  if (id === 'new') {
    const tempUser: User = JSON.parse(JSON.stringify(new Lotes()));
    delete tempUser._id;
    return tempUser;
  }

  return dbUsers.getUserById(id);
};

export default async function UserCrudPage({ params }: Params) {
  const user = await getData(params.id);
  
  return (
    <Container maxWidth="lg" className={roboto.className}>
      <UserUpdate user={user} />
    </Container>
  );
}
