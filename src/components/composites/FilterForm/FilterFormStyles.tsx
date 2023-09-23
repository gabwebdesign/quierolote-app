'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';

interface FilterFormStylesProps {
  theme?: Theme;
}

const FilterFormBasic = (theme:Theme): Styles => ({
  display: 'grid',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px',
  padding:'20px',
  [generateBreakpoint('min-width', theme.breakpoints.md)]: {
    gridTemplateColumns:'20% 40% 35%'
  }
});

const FilterFormElements = (theme:Theme): Styles => ({
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
    },
    '& .horizontal-slider':{
      width:'100%',
      maxWidth:'500px',
      height:'50px',
    },
    '& .horizontal-slider .example-track':{
      top:'20px',
      height:'10px',
    },
    '& .example-track':{
      borderRadius:'5px'
    },
    '& .example-track.example-track-0':{
      background:'gray'
    },
    '& .example-track.example-track-1':{
      background:'purple',
    },
    '& .example-track.example-track-2':{
      background:'grey',
    },
    '& .example-thumb':{
      width: '30px',
      height: '30px',
      borderRadius: '30px',
      top: '10px',
      background:'white',
      border:'1px solid grey',
      cursor:'pointer'
    },
    '& .values':{
      display:'flex',
      justifyContent:'space-between'
    },
    '& .example-mark':{
      width:'10px',
      height:'10px',
    },
    '& .button-container':{
      gap: 10,
      display: 'flex',
      justifyContent: 'flex-end',
      [generateBreakpoint('min-width',theme.breakpoints.md)]: {
        gridColumnStart:'3'
      }
    }
});

const getFilterFormStyles = ({ theme }: FilterFormStylesProps) => ({
  ...FilterFormBasic(theme!),
  ...FilterFormElements(theme!)
});

export const FilterFormStyles =
  styled.form<FilterFormStylesProps>(getFilterFormStyles);
