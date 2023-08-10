import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface HeaderStylesProps {
  theme?: Theme;
}

const HeaderBase = (): Styles => ({
  padding: '32px 0',
});

const HeaderNav = (theme: Theme): Styles => ({
  '& nav': {
    display: 'flex',
    justifyContent: 'space-between',
    [generateBreakpoint('min-width', theme.breakpoints.md)]: {
      display: 'block',
    },
  },
});

const generateHeaderStyles = ({ theme }: HeaderStylesProps) => ({
  ...HeaderBase(),
  ...HeaderNav(theme!),
});

export const HeaderStyles =
  styled.header<HeaderStylesProps>(generateHeaderStyles);

