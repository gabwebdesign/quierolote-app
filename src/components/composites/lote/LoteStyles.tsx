import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface LoteStylesProps {
  theme?: Theme;
}

const LoteBase = (theme:Theme): Styles => ({
        width:'100%',
        display: 'flex',
        flexDirection: 'column', 
});

const LoteStructure = (theme: Theme): Styles => ({
  '& .Lote': {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'row',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
        flexDirection:'column'
    }
  },
  '& .Lote div':{
    display:'flex',
    width:'50%',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
        width: '100%',
    }
  }
});

const generateLoteStyles = ({ theme }: LoteStylesProps) => ({
  ...LoteBase(theme!),
  ...LoteStructure(theme!),
});

export const LoteStyles =
  styled.div<LoteStylesProps>(generateLoteStyles);



