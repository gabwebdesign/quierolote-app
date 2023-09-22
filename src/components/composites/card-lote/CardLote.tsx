'use client';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { CardLoteStyles } from './CardLoteStyles';
import { HTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

export interface CardLoteProps extends HTMLAttributes<HTMLElement> {
  shortDresciption?: string;
  mide?: string;
  price?: string;
  location?: string;
  pathImg?: string;
  id?: string;
}

export const CardLote = ({
  shortDresciption,
  mide,
  price,
  location,
  pathImg,
  id
}: CardLoteProps) => {
  const theme = useTheme();
  return (
    <Link href={`/lote-info/${id}`} style={{textDecoration: 'none'}}>
      <CardLoteStyles>
        <Typography fontWeight="bold">{shortDresciption}</Typography>
        <img src={`assets/images/${pathImg}`} />
        <div className="location">
          <Icon name="Location" width={28} height={28} />
          <Typography>{location}</Typography>
        </div>
        <div className="price-and-size">
          <Typography textSize="xl">
            {mide}m<sup>2</sup>
          </Typography>
          <Typography textSize="xl" fontWeight="bold">
            <small>₡</small>
            {price}
          </Typography>
        </div>
      </CardLoteStyles>
    </Link>
  );
};
