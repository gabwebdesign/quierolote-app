import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface ServiciosStylesProps {
  theme?: Theme;
}

const ServiciosBase = (theme:Theme): Styles => ({
        width:'100%',
        display: 'flex',
        padding:'120px 0',
        background:'linear-gradient(0deg, rgba(46,36,64,0.10830269607843135) 0%, rgba(255,255,255,1) 11%, rgba(255,255,255,1) 92%, rgba(46,36,64,0.0970982142857143) 100%)'
});

const ServiciosStructure = (theme: Theme): Styles => ({
  '& .Servicios': {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'row',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
        flexDirection:'column'
    }
  },
  '& .Servicios div':{
    display:'flex',
    width:'50%',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
        width: '100%',
    }
  },
  '& .message':{
    padding:'80px 0 0 160px'
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

const generateServiciosStyles = ({ theme }: ServiciosStylesProps) => ({
  ...ServiciosBase(theme!),
  ...ServiciosStructure(theme!),
});

export const ServiciosStyles =
  styled.header<ServiciosStylesProps>(generateServiciosStyles);



