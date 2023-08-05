'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';
import { IconProps } from './Icon';

interface IconStylesProps extends IconProps {
  theme?: Theme;
}

const IconBasic = (): Styles => ({
  '.icon': {
    display: 'block',
    color: 'inherit',
    '& path': {
      display: 'block',
      width: '100%',
      height: '100%',
      color: 'inherit',
    },
  },
});

const getIconStyles = ({ color, width, height }: IconStylesProps) => ({
  ...(color && { color }),
  ...(width && { width }),
  ...(height && { height }),
  ...IconBasic(),
});

export const IconStyles = styled.span<IconStylesProps>(getIconStyles);
