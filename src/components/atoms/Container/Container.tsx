'use client';
import { HTMLAttributes, ReactNode } from 'react';
import { ContainerStyles } from './ContainerStyles';
import { Breakpoints } from '@/themes/theme';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  tag?: Tag;
  children?: ReactNode;
  maxWidth?: Breakpoints;
  disableGutters?: boolean;
}

type Tag = 'section' | 'div';

export const Container = ({
  tag = 'section',
  children,
  ...rest
}: ContainerProps) => {
  const ContainerComponent = ContainerStyles.withComponent(tag);

  return <ContainerComponent {...rest}>{children}</ContainerComponent>;
};
