import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface FooterStylesProps {
  theme?: Theme;
}

const FooterBase = (theme:Theme): Styles => ({
        width:'100%',
        display: 'flex',
        padding:'50px 0',
        backgroundColor:theme.colors.primary.main
});

const FooterStructure = (theme: Theme): Styles => ({
  '& .footer-content':{
    display: 'flex',
    flexDirection:'row',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
        flexDirection:'column',
      }
  },
  '& .footer-content div': {
    width:'50%',
    marginBottom:'10px',
    [generateBreakpoint('max-width', theme.breakpoints.md)]: {
      width: '100%',
    }
  },
  '& .mb': {
    marginBotom:'20px'
  },
  '& .footer-content ul': {
    listStyle:'none',
  },
  '& .lotes':{
    display: 'flex',
    justifyContent: 'center',
  }
});

const generateFooterStyles = ({ theme }: FooterStylesProps) => ({
  ...FooterBase(theme!),
  ...FooterStructure(theme!),
});

export const FooterStyles =
  styled.footer<FooterStylesProps>(generateFooterStyles);



