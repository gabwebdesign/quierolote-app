'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';
import { GridProps } from './Grid';

interface GridStylesProps extends GridProps {
  theme?: Theme;
}

const GridBasic = (): Styles => ({
  width: '100%',
  display: 'grid',
  alignItems: 'center',
});

const GridTemplateColumns = ({
  columnSize = '100%',
  gap = 0,
}: {
  columnSize: GridStylesProps['columnSize'];
  gap: GridStylesProps['gap'];
}): Styles => {
  const gridTemplateColumns = `repeat(auto-fill, minmax(calc((${columnSize}) - ${gap}px), 1fr))`;
  return {
    gridTemplateColumns,
  };
};

const getGridStyles = ({ gap, columnSize }: GridStylesProps) => ({
  ...GridBasic(),
  ...(gap && { gap }),
  ...(columnSize && GridTemplateColumns({ gap, columnSize })),
});

export const GridStyles = styled.section<GridStylesProps>(getGridStyles);
