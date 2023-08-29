import { Lote } from "@/types/lote";
import { atom } from "jotai";

export const lotAtom = atom<Lote | null>(null);