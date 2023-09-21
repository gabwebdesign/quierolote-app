'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';

interface LoteUpdateStylesProps {
  theme?: Theme;
}

const LoteUpdateBasic = (theme: Theme): Styles => ({
  width: '80%',
  borderRadius: 8,
  boxShadow: '2px 2px 5px 1px rgba(0,0,0,.18)',
  margin: '20px auto',
  padding: 20,
  '& form': {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  '& .images': {
    width: '100%',
    margin: '10px 0',
    display: 'flex',
    gap: 20
  },
  '& .image': {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: 100,
    '& > div': {
      position: 'relative',
      width: 100,
      height: 100,
      borderRadius: '50%',
      overflow: 'hidden',
    },
  },
});

const getLoteUpdateStyles = ({ theme }: LoteUpdateStylesProps) => ({
  ...LoteUpdateBasic(theme!),
});

export const LoteUpdateStyles =
  styled.div<LoteUpdateStylesProps>(getLoteUpdateStyles);
