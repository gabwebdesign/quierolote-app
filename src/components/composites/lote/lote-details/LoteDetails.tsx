'use client';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { LoteCardIcon } from '../lote-card-icon/LoteCardIcon';
import { LoteDetailsStyles } from './LoteDetailsStyles';

export const LoteDetails = () => {
  const theme = useTheme();
  return (
    <LoteDetailsStyles>
      <div className='general-info'>
        <div className='price'>
            <Typography variant='heading1' color={theme.colors.primary.main} fontWeight='bold'>$15000</Typography>
            <Typography fontWeight='bold' textSize='xl'>5000 m<sup>2</sup></Typography>  
        </div>
        <div className='description'>
            <Typography fontWeight='bold' textSize='xl'>Santa Ana, Escazú, San Jose</Typography>  
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint comido</Typography>  
        </div>
        <div className='details'>
            <LoteCardIcon />
        </div>
      </div>
    </LoteDetailsStyles>
  );
};
