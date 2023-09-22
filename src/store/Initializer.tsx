'use client';
import { Lote } from '@/types/lote';
import { lotAtom, lotsAtom, lotsDestacadosAtom } from './atoms';
import { useMemo } from 'react';
import { useHydrateAtoms } from 'jotai/utils';
import { ArrayTuple } from '@/types/common';

interface Props {
  lots?: Lote[] | null;
  lotsDestacados?: Lote[] | null;
  lot?: Lote | null;
}

const Atoms = {
  lots: lotsAtom,
  lot: lotAtom,
  lotsDestacados: lotsDestacadosAtom,
};

export const Initializer = (props: Props) => {
  const tupple = useMemo((): ArrayTuple => {
    const keys = Object.keys(props);

    return keys.map((key) => [
      Atoms[key as keyof typeof Atoms],
      props[key as keyof typeof props],
    ]);
  }, [props]);


  useHydrateAtoms(tupple);

  return null;
};
