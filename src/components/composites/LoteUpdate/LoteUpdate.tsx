'use client';
import { lotAtom } from '@/store/atoms';
import { Lote } from '@/types/lote';
import { useHydrateAtoms } from 'jotai/utils';
import { useAtomValue } from 'jotai';
import { Stepper, StepperProps } from '../Stepper/Stepper';
import { useMemo } from 'react';

interface Props {
  lot: Lote | null;
}

export const LoteUpdate = ({ lot }: Props) => {
  useHydrateAtoms([[lotAtom, lot ?? null]]);
  const lote = useAtomValue(lotAtom);

  const steps = useMemo((): StepperProps['steps'] => {
    return [
      {
        title: ''
      }
    ]
  }, [lote]);

  return <Stepper />;
};
