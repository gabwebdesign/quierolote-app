import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface LoteDetailsStylesProps {
  theme?: Theme;
}

const LoteDetailsBase = (): Styles => ({
        width:'100%',
        display: 'flex',
        padding:'20px 0',
        flexDirection:'column'
});

const LoteDetailsStructure = (theme: Theme): Styles => ({
    '& .general-info':{
        display: 'grid', 
        gap:'10px',
        [generateBreakpoint('min-width', theme.breakpoints.md)]: {
            gridTemplateColumns:'repeat(4,1fr)',
        },
    },
    '& .general-info .description':{
        [generateBreakpoint('min-width', theme.breakpoints.md)]: {
            gridColumn: '2/5',
        },
    },
    '& .details':{
        display: 'grid',
        gap:'10px',
        gridTemplateColumns:'repeat(2,1fr)',
        [generateBreakpoint('min-width', theme.breakpoints.md)]: {
            gridTemplateColumns:'repeat(4,1fr)',
        },
    }
});

const generateLoteDetailsStyles = ({ theme }: LoteDetailsStylesProps) => ({
  ...LoteDetailsBase(),
  ...LoteDetailsStructure(theme!),
});

export const LoteDetailsStyles =
  styled.div<LoteDetailsStylesProps>(generateLoteDetailsStyles);



