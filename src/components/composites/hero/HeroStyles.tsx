
// .hero{
//     width: 100%;
//     background: #6A1A75;
//     display: flex;
// }

// .hero div{
//     width: 50%;
// }

import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface HeroStylesProps {
  theme?: Theme;
}

const HeroBase = (theme:Theme): Styles => ({
        width:'100%',
        background: theme.colors.purple,
        display: 'flex',
        minHeight:'415px'
});

const HeroStructure = (theme: Theme): Styles => ({
  '& .hero': {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'row',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
        flexDirection:'column'
    }
  },
  '& .hero div':{
    display:'flex',
    width:'50%',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
        width: '100%',
    }
  },
  '& .message':{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    height:'415px',
  },
  '& h1':{
    marginBottom:'60px'
  },
  '& .form':{
    backgroundColor:theme.colors.white,
    padding:'30px',
    flexDirection:'column'
  },
  '& .form h3':{
    marginBottom:'20px'
  }
});

const generateHeroStyles = ({ theme }: HeroStylesProps) => ({
  ...HeroBase(theme!),
  ...HeroStructure(theme!),
});

export const HeroStyles =
  styled.header<HeroStylesProps>(generateHeroStyles);



