import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface FaqStylesProps {
  theme?: Theme;
}

const FaqBase = (): Styles => ({
  padding: '32px 0',
});

const FaqNav = (theme: Theme): Styles => ({
  '& nav': {
    display: 'flex',
    justifyContent: 'space-between',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
      display: 'block',
    },
  },
  'nav div':{
    display:'flex',
    width:'50%'
  }
});

const generateFaqStyles = ({ theme }: FaqStylesProps) => ({
  ...FaqBase(),
  ...FaqNav(theme!),
});

export const FaqStyles =
  styled.div<FaqStylesProps>(generateFaqStyles);

