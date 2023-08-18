'use client';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { LoteCardIconStyles } from './LoteCardIconStyles';

export const LoteCardIcon = () => {
  const theme = useTheme();
  return (
    <LoteCardIconStyles>
      <Icon name={'Mide'} width={'22px'} height={'22px'} />
      <div className='feature'>
            <Typography>Mide</Typography>
            <Typography>6000 m2</Typography>
      </div>
    </LoteCardIconStyles>
  );
};
