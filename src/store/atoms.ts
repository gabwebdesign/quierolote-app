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
export const lotsFilterOptionsAtom = atom<FilterOptions | null>(null);

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
  filterOptions: FilterOptions | null
): Lote[] => {
  if (!lots && !filterOptions) return [];

  if (!filterOptions) return lots!;

  const {provincia, price, terreno} = filterOptions;

  return lots!.filter(
    (lot) =>
      lot.direccion?.provincia?.toLowerCase() === provincia.toLowerCase() &&
      +lot!.detalles!.precio! <= price.max &&
      +lot!.detalles!.precio! >= price.min &&
      +lot!.detalles!.terreno! <= terreno.max &&
      +lot!.detalles!.terreno! >= terreno.min
  );
};

export const lostFilteredAtom = atom((get) => {
  const originalLots = get(lotsAtom);
  const filterOptions = get(lotsFilterOptionsAtom);

  return filterLots(originalLots, filterOptions)
});
