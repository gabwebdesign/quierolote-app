import { CSSProperties } from 'react';
import { CSSObject } from '@emotion/react';
import { WritableAtom } from 'jotai';

export type Styles = CSSProperties | CSSObject;

type AtomTupleJotai<A = WritableAtom<unknown, any[], any>, V = unknown> = readonly [A, V];
export type ArrayTuple = Array<AtomTupleJotai>;