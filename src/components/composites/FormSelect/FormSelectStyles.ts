'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';

interface FormSelectStylesProps {
  theme?: Theme;
}

const FormSelectBasic = (theme: Theme): Styles => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

const getFormSelectStyles = ({ theme }: FormSelectStylesProps) => ({
  ...FormSelectBasic(theme!),
});

export const FormSelectStyles =
  styled.div<FormSelectStylesProps>(getFormSelectStyles);
