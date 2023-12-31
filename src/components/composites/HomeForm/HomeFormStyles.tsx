'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';

interface HomeFormStylesProps {
  theme?: Theme;
}

const HomeFormBasic = (): Styles => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '20px',
});

const HomeFormElements = (): Styles => ({
    '& .form-wrapper':{
        width:'100% !important'
    },
    '& .form-container':{
        display: 'flex',
        width:'100% !important',
        flexDirection: 'row',
        gap: '20px',
        marginTop: '20px',
    },

    '& .colum-form':{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '20px',
        width:'100%'
    },
    '& .colum-form div':{
        width:'100% !important'
    },
    '& input, select':{
        width:'100%',
        padding:'8px 11px',
        backgroundColor:'#D8D8D8',
        borderRadius: '8px',
        border: 'none',
        fontWeight: '700',
        color: '#707070'
    }
});

const getHomeFormStyles = ({ theme }: HomeFormStylesProps) => ({
  ...HomeFormBasic(),
  ...HomeFormElements()
});

export const HomeFormStyles =
  styled.form<HomeFormStylesProps>(getHomeFormStyles);
