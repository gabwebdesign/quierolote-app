import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface LoteInfoStylesProps {
  theme?: Theme;
}

const LoteInfoBase = (theme:Theme): Styles => ({
        width:'100%',
        background: theme.colors.secondary.ligth,
        display: 'flex',
});


const generateLoteInfoStyles = ({ theme }: LoteInfoStylesProps) => ({
  ...LoteInfoBase(theme!),
});

export const LoteInfoStyles =
  styled.section<LoteInfoStylesProps>(generateLoteInfoStyles);



