'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';

interface FormInputStylesProps {
  theme?: Theme;
}

const FormInputBasic = (theme: Theme): Styles => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
});

const getFormInputStyles = ({ theme }: FormInputStylesProps) => ({
  ...FormInputBasic(theme!),
});

export const FormInputStyles =
  styled.div<FormInputStylesProps>(getFormInputStyles);
