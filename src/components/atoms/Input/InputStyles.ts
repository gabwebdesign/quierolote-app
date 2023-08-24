'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';
import { InputProps } from './Input';

interface InputStylesProps extends InputProps {
  theme?: Theme;
}

const InputBasic = (theme: Theme): Styles => ({
  width: '100%',
  padding: '8px 11px',
  backgroundColor: theme.colors.secondary.dark,
  borderRadius: '8px',
  border: 'none',
  fontWeight: theme.fontWeight.bold,
  color: theme.colors.secondary.main,
  '&:focus': {
    outline: theme.colors.primary.main
  }
});

const getInputStyles = ({theme}: InputStylesProps) => ({
  ...InputBasic(theme!),
});

export const InputStyles = styled.input<InputStylesProps>(getInputStyles);
