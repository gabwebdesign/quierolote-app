import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface LoteInfoStylesProps {
  theme?: Theme;
}

const LoteInfoBase = (theme:Theme): Styles => ({
        width:'100%',
        background: theme.colors.purple,
        display: 'flex',
        minHeight:'415px'
});

const LoteInfoStructure = (theme: Theme): Styles => ({
  '& .LoteInfo': {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'row',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
        flexDirection:'column'
    }
  },
  '& .LoteInfo div':{
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

const generateLoteInfoStyles = ({ theme }: LoteInfoStylesProps) => ({
  ...LoteInfoBase(theme!),
  ...LoteInfoStructure(theme!),
});

export const LoteInfoStyles =
  styled.div<LoteInfoStylesProps>(generateLoteInfoStyles);



