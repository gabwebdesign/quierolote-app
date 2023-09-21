import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface PaginationCompStylesProps {
  theme?: Theme;
}

const PaginationCompBase = (theme:Theme): Styles => ({
        display: 'flex',
        gap: '40px',
        justifyContent:'center'
});

const PaginationElement = (): Styles => ({
    '& ul':{
        listStyle: 'none',
        display: 'flex'
    },
    '& li':{
        padding:'20px'
    }
});

const generatePaginationCompStyles = ({ theme }: PaginationCompStylesProps) => ({
  ...PaginationCompBase(theme!),
  ...PaginationElement()
});

export const PaginationCompStyles =
  styled.div<PaginationCompStylesProps>(generatePaginationCompStyles);



