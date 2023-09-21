'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';
import { InputProps } from './Input';

interface InputStylesProps extends InputProps {
  theme?: Theme;
}

const InputCommon = (theme: Theme) => ({
  padding: '8px 11px',
  backgroundColor: theme.colors.secondary.dark,
  borderRadius: '8px',
  border: 'none',
  fontWeight: theme.fontWeight.bold,
  color: theme.colors.secondary.main,
  '&:focus': {
    outline: theme.colors.primary.main,
  },
});

const InputBasic = (theme: Theme): Styles => ({
  '& input': {
    ...InputCommon(theme)
  },
});

const InputLabel = (theme: Theme): Styles => ({
  '& .label': {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.secondary.main,
  },
});

const InputCheckbox = (theme: Theme): Styles => ({
  '& input': {
    ...InputCommon(theme),
    width: 'auto',
    alignSelf: 'flex-start',
  },
});

const getInputStyles = ({ theme, type }: InputStylesProps) => ({
  ...InputLabel(theme!),
  ...(type === 'checkbox' && InputCheckbox(theme!)),
  ...(type !== 'checkbox' && InputBasic(theme!)),
});

export const InputStyles = styled.div<InputStylesProps>(getInputStyles);
