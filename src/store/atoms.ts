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
