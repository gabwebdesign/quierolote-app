import { Lote } from '@/types/lote';
import { User } from '@/types/user';
import bcrypt from 'bcryptjs';

interface SeedData {
  lotes: Lote[];
  users: User[];
}

export const initialData: SeedData = {
  lotes: [
    {
      descripcion: 'Lote en renta en Heredia Centro',
      estado: 'venta',
      detalles: {
        precio: 10,
        terreno: 2,
      },
      titulo: 'Lote en renta en Heredia Centro',
      direccion: {
        provincia: 'Heredia',
        canton: 'Belén',
        distrito: 'San Rafael',
        direccion: 'Belén 320mts sur de la panasonic',
      },
      // user: '63c1da1a3770933a1e1d27ff',
      // images: [

      // ],
    },
  ],
  users: [
    {
      name: 'Test Admin',
      role: 'admin',
      email: `test-admin@quierolote.com`,
      password: bcrypt.hashSync('123456'),
      phone: '888888888',
      _id: '63c1da1a3770933a1e1d27ff',
      picture: 'test picture',
    },
  ],
};
