import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface DestacadosStylesProps {
  theme?: Theme;
}

const DestacadosBase = (theme:Theme): Styles => ({
        width:'100%',
        display: 'flex',
        padding:'50px 0',
        minHeight:'300px'
});

const DestacadosStructure = (theme: Theme): Styles => ({
  '& .destacados-content':{
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
        flexDirection:'column',
        alignItems:'center'
    }
  },
  '& .destacados-content > div':{
    marginBottom:'50px'
  },
  '& .lotes':{
    display: 'flex',
    justifyContent: 'center',
    marginBottom:'30px !important'
  }
});

const generateDestacadosStyles = ({ theme }: DestacadosStylesProps) => ({
  ...DestacadosBase(theme!),
  ...DestacadosStructure(theme!),
});

export const DestacadosStyles =
  styled.div<DestacadosStylesProps>(generateDestacadosStyles);



