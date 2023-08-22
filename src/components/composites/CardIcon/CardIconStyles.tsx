import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface CardIconStylesProps {
  theme?: Theme;
}

const CardIconBase = (): Styles => ({
  padding: '38px 0 0 32px',
  minWidth:'222px',
  minHeight:'222px',
  borderRadius:'10px',
  flexDirection:'column',
  boxShadow: '2px 2px 5px 1px rgba(0,0,0,.18)'
});

const CardIconElements = (): Styles => ({
    '& span':{
        marginBottom: '29px',
    },
    '& p':{
        maxWidth: '150px',
    }
  });


const generateCardIconStyles = ({ theme }: CardIconStylesProps) => ({
  ...CardIconBase(),
  ...CardIconElements()
});

export const CardIconStyles =
  styled.div<CardIconStylesProps>(generateCardIconStyles);

