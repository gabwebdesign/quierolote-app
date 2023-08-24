'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';
import { SelectProps } from './Select';

interface SelectStylesProps extends SelectProps {
  theme?: Theme;
}

const SelectBasic = (theme: Theme): Styles => ({
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

const getSelectStyles = ({theme}: SelectStylesProps) => ({
  ...SelectBasic(theme!),
});

export const SelectStyles = styled.select<SelectStylesProps>(getSelectStyles);
