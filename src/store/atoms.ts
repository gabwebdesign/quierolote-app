import { Lote } from '@/types/lote';
import { atom } from 'jotai';

export const lotAtom = atom<Lote>({});
export const updateLotAtom = atom(
  () => {},
  (get, set, data: object) => {
    set(lotAtom, { ...get(lotAtom), ...data });
  }
);
export const stepValidAtom = atom<boolean>(true);

export const lotsDestacadosAtom = atom<Lote[] | null>(null);
export const lotsAtom = atom<Lote[] | null>(null);
export const lotsAtomCopy = atom<Lote[] | null>(null);

interface FilterOptions {
  provincia: string;
  terreno: {
    min: number;
    max: number;
  };
  price: {
    min: number;
    max: number;
  };
}

const filterLots = (
  lots: Lote[] | null,
  { provincia, price, terreno }: FilterOptions
): Lote[] => {
  if (!lots) return [];

  return lots.filter(
    (lot) =>
      lot.direccion?.provincia?.toLowerCase() === provincia.toLowerCase() &&
      +lot!.detalles!.precio! <= price.max &&
      +lot!.detalles!.precio! >= price.min &&
      +lot!.detalles!.terreno! <= terreno.max &&
      +lot!.detalles!.terreno! >= terreno.min
  );
};

export const lostFilteredAtom = atom(
  () => [],
  (get, set, filterOptions: FilterOptions) => {
    set(lotsAtomCopy, get(lotsAtom))
    set(lotsAtom, filterLots(get(lotsAtom), filterOptions));
  }
);
