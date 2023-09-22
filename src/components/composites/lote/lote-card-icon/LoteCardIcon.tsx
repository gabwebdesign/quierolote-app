'use client';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { LoteCardIconStyles } from './LoteCardIconStyles';

export interface LoteIconProps {
  iconName: any;
  feature: string;
  data?: string;
}

export const LoteCardIcon = ({ iconName, feature, data }: LoteIconProps) => {
  const theme = useTheme();
  return (
    <LoteCardIconStyles>
      <Icon name={iconName} width={'22px'} height={'22px'} />
      <div className="feature">
        <Typography>{feature}</Typography>
        {data && (
          <Typography>
            {data} m<sup>2</sup>
          </Typography>
        )}
      </div>
    </LoteCardIconStyles>
  );
};
