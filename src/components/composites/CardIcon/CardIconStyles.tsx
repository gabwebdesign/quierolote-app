import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface CardIconStylesProps {
  theme?: Theme;
}

const CardIconBase = (): Styles => ({
  padding: '38px 0 0 32px',
  minWidth:'222px',
  minHeight:'222px',
  border:'1px solid #000',
  borderRadius:'8px',
  flexDirection:'column'
});


const generateCardIconStyles = ({ theme }: CardIconStylesProps) => ({
  ...CardIconBase(),
});

export const CardIconStyles =
  styled.div<CardIconStylesProps>(generateCardIconStyles);

