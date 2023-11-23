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
    [generateBreakpoint('max-width', theme.breakpoints.sm)]: {
      width: '100%',
      flexDirection:'column',
      justifyContent: 'center',
      gap:'20px'
    },
  },
  '& .menu': {
    display:'flex',
    justifyContent:'flex-end',
    [generateBreakpoint('max-width', theme.breakpoints.sm)]: {
      width: '100%',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center'
    }
  },
  '& .nav-brand':{
    display:'flex',
    [generateBreakpoint('max-width', theme.breakpoints.sm)]: {
      width:'100%',
      justifyContent:'center'
    }
  },
  'nav div':{
    display:'flex',
    width:'50%'
  },
  'nav ul':{
    display:'flex',
    listStyle:'none',
    gap:'20px'
  },
  'nav ul li a':{
      textDecoration:'none'
  }
});

const generateHeaderStyles = ({ theme }: HeaderStylesProps) => ({
  ...HeaderBase(),
  ...HeaderNav(theme!),
});

export const HeaderStyles =
  styled.header<HeaderStylesProps>(generateHeaderStyles);

