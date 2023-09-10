'use client';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { AgentCardStyles } from './AgentCardStyles';
import { HTMLAttributes } from 'react';
import { Button } from '@/components/atoms/Button/Button';

export interface AgentCardProps
  extends HTMLAttributes<HTMLElement> {
  agentName:string;
  phone:string;
  email:string;
  pathImg:string;
}

export const AgentCard = ({
    agentName,
    phone,
    email,
    pathImg
  }:AgentCardProps) => {
  const theme = useTheme();
  return (
        <AgentCardStyles>
            <img src={pathImg} />
            <Typography fontWeight='bold'>{agentName}</Typography>
            <Button tag='a' variant='contained' href={`tel:${phone}`}>LLAMAR A {agentName}</Button>
            <Button tag='a' variant='outlined' href={`mailto:${email}`}>CONTACTAR POR EMAIL</Button>
        </AgentCardStyles>
  );
};
