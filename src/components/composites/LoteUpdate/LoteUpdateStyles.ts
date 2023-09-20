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
    gap: 20
  }
});

const getLoteUpdateStyles = ({theme}: LoteUpdateStylesProps) => ({
  ...LoteUpdateBasic(theme!),
});

export const LoteUpdateStyles = styled.div<LoteUpdateStylesProps>(getLoteUpdateStyles);
