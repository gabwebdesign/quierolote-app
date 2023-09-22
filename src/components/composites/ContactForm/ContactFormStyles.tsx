'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';

interface ContactFormStylesProps {
  theme?: Theme;
}

const ContactFormBasic = (): Styles => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

const ContactFormElements = (): Styles => ({
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
    '& input, select, textarea':{
        width:'100%',
        padding:'8px 11px',
        backgroundColor:'#D8D8D8',
        borderRadius: '8px',
        border: 'none',
        fontWeight: '700',
        color: '#707070'
    },
    '& textarea':{
      resize:'none'
    }
});

const getContactFormStyles = ({ theme }: ContactFormStylesProps) => ({
  ...ContactFormBasic(),
  ...ContactFormElements()
});

export const ContactFormStyles =
  styled.form<ContactFormStylesProps>(getContactFormStyles);
