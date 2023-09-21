'use client';
import { lotsAtom } from "@/store/atoms";
import { Lote } from "@/types/lote";
import { useHydrateAtoms } from "jotai/utils";

interface LotsDestacados {
  lots: Lote[] | null;
}

export const LotsInitialiazer = ({lots}: LotsDestacados) => {
  useHydrateAtoms([[lotsAtom, lots]]);
  return null;
}