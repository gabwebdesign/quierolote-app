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
  '& div':{
    marginBottom:'30px'
  },
  '& h3':{
    width:'100%',
    textAlign:'center'
  },
  '& .servicios': {
    display: 'flex',
    flexDirection:'row',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
      width: '100%',
      flexDirection:'column',
    }
  },
  '& .message':{
    padding:'80px 0',
    width:'480px',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
      width: '100%',
      padding:0
    }
  },
  '& .icons':{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
    width:'100%'
  },
  '& .icons > div':{
    marginBottom:'30px'
  }
});

const generateServiciosStyles = ({ theme }: ServiciosStylesProps) => ({
  ...ServiciosBase(theme!),
  ...ServiciosStructure(theme!),
});

export const ServiciosStyles =
  styled.div<ServiciosStylesProps>(generateServiciosStyles);



