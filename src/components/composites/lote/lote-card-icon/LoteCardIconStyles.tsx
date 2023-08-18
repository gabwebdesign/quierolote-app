import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface LoteCardIconStylesProps {
  theme?: Theme;
}

const LoteCardIconBase = (): Styles => ({
    padding: '32px 0',
    display: 'flex',
    gap: '10px'
});



const generateLoteCardIconStyles = ({ theme }: LoteCardIconStylesProps) => ({
  ...LoteCardIconBase(),
});

export const LoteCardIconStyles =
  styled.div<LoteCardIconStylesProps>(generateLoteCardIconStyles);

