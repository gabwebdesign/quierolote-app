import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface AccordionStylesProps {
  theme?: Theme;
}

const AccordionBase = (): Styles => ({
  paddingTop: '38px',
});

const AccordionElements = (theme: Theme): Styles => ({
    '& .answer':{
        padding: '35px',
    },
    '& .control':{
        width: '100%',
        height:'50px',
        borderBottom:`1px solid ${theme.colors.primary.main}`,
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        cursor:'pointer'
    },
    '& .control__button':{
        width:'10px',
        height:'10px',
        color:`${theme.colors.primary.main}`,
        fontSize:'26px',
        marginRight:'10px'
    }
  });


const generateAccordionStyles = ({ theme }: AccordionStylesProps) => ({
  ...AccordionBase(),
  ...AccordionElements(theme!)
});

export const AccordionStyles =
  styled.div<AccordionStylesProps>(generateAccordionStyles);