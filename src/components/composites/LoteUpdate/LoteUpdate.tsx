'use client';
import { lotAtom } from '@/store/atoms';
import { Lote } from '@/types/lote';
import { useHydrateAtoms } from 'jotai/utils';
import { useAtomValue } from 'jotai';

interface Props {
  lot: Lote | null;
}

export const LoteUpdate = ({ lot }: Props) => {
  useHydrateAtoms([[lotAtom, lot ?? null]]);
  const lotAtoma = useAtomValue(lotAtom);
  return <div>{JSON.stringify(lotAtoma)}</div>;
};
