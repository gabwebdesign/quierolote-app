'use client';
import { lotsDestacados } from "@/store/atoms";
import { Lote } from "@/types/lote";
import { useHydrateAtoms } from "jotai/utils";

interface LotsDestacados {
  lots: Lote[] | null;
}

export const LotsDestacadosInitialiazer = ({lots}: LotsDestacados) => {
  useHydrateAtoms([[lotsDestacados, lots]]);
  return null;
}