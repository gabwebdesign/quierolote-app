import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

interface AgentCardStylesProps {
  theme?: Theme;
}

const AgentCardBase = (theme:Theme): Styles => ({
    padding:'36px 55px',
    borderRaius:'35px',
    background:theme.colors.secondary.ligth,
    boxShadow: '2px 2px 5px 1px rgba(0,0,0,.18)',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    gap:'10px'
});

const AgentCardExtra = (): Styles => ({
    '& img':{
        width:'50px',
        height:'50px'
    }
});


const generateAgentCardStyles = ({ theme }: AgentCardStylesProps) => ({
  ...AgentCardBase(theme!),
  ...AgentCardExtra()
});

export const AgentCardStyles =
  styled.div<AgentCardStylesProps>(generateAgentCardStyles);

