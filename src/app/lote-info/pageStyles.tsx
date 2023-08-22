'use client';
import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface PageStylesProps {
  theme?: Theme;
}

const PageBase = ( theme:Theme): Styles => ({
  paddingTop: '38px',
  display: 'grid',
  gridTemplateColumns:'auto',
  [generateBreakpoint('min-width', theme.breakpoints.md)]: {
    gridTemplateColumns:'repeat(4, 1fr)',
    gap:'20px',
    }
});

const PageElements = (theme: Theme): Styles => ({
    '& .lote-info':{
        gridColumn:'1',
        minHeight:'300px',
        [generateBreakpoint('min-width', theme.breakpoints.md)]: {
            gridColumn:'1/4',
        }
    },
    '& aside':{
        minHeight:'300px'
    },
    '& aside .agent-card':{
        padding:'36px 55px',
        borderRaius:'35px',
        background:theme.colors.secondary.ligth,
        boxShadow: '2px 2px 5px 1px rgba(0,0,0,.18)',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        gap:'30px'
    }
  });


const generatePageStyles = ({ theme }: PageStylesProps) => ({
  ...PageBase(theme!),
  ...PageElements(theme!)
});

export const PageStyles =
  styled.div<PageStylesProps>(generatePageStyles);