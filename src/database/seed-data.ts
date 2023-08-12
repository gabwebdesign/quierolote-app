import { Lote } from "@/types/lote";

interface SeedData {
  lotes: Lote[];
  // users: IUser[];
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
  // users: [
  
  // ],
};
