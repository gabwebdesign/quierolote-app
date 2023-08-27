import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface CardLoteStylesProps {
  theme?: Theme;
}

const CardLoteBase = (): Styles => ({
  padding: '30px',
  width:'320px',
  minHeight:'405px',
  boxShadow: '2px 2px 5px 1px rgba(0,0,0,.18)',
  marginBottom:'50px'
});

const CardLoteElements = ( ): Styles => ({
    '& .ideal':{
        marginBottom: '29px',
        display:'flex',
    },
    '& .ideal > span':{
        marginRight: '15px',
    },
    '& img':{
        width:'100%',
        height:'160px',
        padding:'20px 0'
    },
    '& .location':{
        display:'flex',
        marginBottom: '29px',
        alignItems:'flex-end'
    },
    '& .price-and-size':{
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'space-between'
    }
  });


const generateCardLoteStyles = ({ theme }: CardLoteStylesProps) => ({
  ...CardLoteBase(),
  ...CardLoteElements()
});

export const CardLoteStyles =
  styled.div<CardLoteStylesProps>(generateCardLoteStyles);

