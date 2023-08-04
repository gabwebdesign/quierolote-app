'use client';
import { HTMLAttributes, ReactNode } from 'react';
import { GridStyles } from './GridStyles';
import { Breakpoints } from '@/themes/theme';

export interface GridProps extends HTMLAttributes<HTMLElement> {
  tag?: Tag;
  children?: ReactNode;
  gap?: number;
  columnSize?: string;
}

type Tag = 'section' | 'div';

export const Grid = ({ tag = 'div', children, ...rest }: GridProps) => {
  const GridComponent = GridStyles.withComponent(tag);

  return <GridComponent {...rest}>{children}</GridComponent>;
};
