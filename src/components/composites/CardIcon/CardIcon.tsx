'use client';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { CardIconStyles } from './CardIconStyles';
import { HTMLAttributes, ReactNode } from 'react';

export interface CardIconProps
  extends HTMLAttributes<HTMLElement> {
  iconName:any;
  serviceName: string;
}

export const CardIcon = ({
    iconName,
    serviceName}:CardIconProps) => {
  const theme = useTheme();
  return (
    <CardIconStyles>
        <Icon name={iconName} width={75} height={50} />
        <Typography>
             {serviceName}
        </Typography>
    </CardIconStyles>
  );
};
