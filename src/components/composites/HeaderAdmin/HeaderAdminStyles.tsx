import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface HeaderAdminStylesProps {
  theme?: Theme;
}

const HeaderAdminBase = (): Styles => ({
  padding: '32px 0',
});

const HeaderAdminNav = (theme: Theme): Styles => ({
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
  },
  'nav ul':{
    display:'flex',
    listStyle:'none',
    gap:'20px',
    alignItems: 'center'
  }
});

const generateHeaderAdminStyles = ({ theme }: HeaderAdminStylesProps) => ({
  ...HeaderAdminBase(),
  ...HeaderAdminNav(theme!),
});

export const HeaderAdminStyles =
  styled.header<HeaderAdminStylesProps>(generateHeaderAdminStyles);

