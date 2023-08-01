'use client';

import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { ButtonProps } from './Button';
import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';

interface ButtonStylesProps extends ButtonProps {
  theme?: Theme;
}

const ButtonBasic = (theme?: Theme): Styles => ({
  display: 'inline-flex',
  alignItems: 'center',
  fontWeight: theme!.fontWeight.bold,
  minWidth: '64px',
  border: 0,
  outline: 0,
  margin: 0,
  userSelect: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  position: 'relative',
  [generateBreakpoint('max-width', theme!.breakpoints.md)]: {
    width: '100%',
  },
  '&:hover': {
    textDecoration: 'none',
    transition: 'background-color 0.3s ease-in-out',
  },
});

const ButtonText = (): Styles => ({
  background: 'none',
});

const ButtonContained = (theme: Theme): Styles => ({
  padding: '11px 14px',
  borderRadius: 8,
  color: theme.colors.white,
  justifyContent: 'center',
});

const ButtonOutlined = (): Styles => ({
  padding: '11px 14px',
  background: 'transparent',
  borderRadius: 8,
  justifyContent: 'center',
  borderStyle: 'solid',
  borderWidth: 3,
});

const getButtonColor = (
  color: ButtonStylesProps['color'],
  theme: Theme
): string => {
  const colors: Record<NonNullable<ButtonStylesProps['color']>, string> = {
    primary: theme.colors.primary.main,
    white: theme.colors.white,
  };
  return colors[color || 'primary'];
};

const getButtonStyles = ({ theme, variant, color }: ButtonStylesProps) => {
  const textBorderColor = getButtonColor(color, theme!);

  return {
    ...ButtonBasic(theme),
    ...(variant === 'contained' && {
      ...ButtonContained(theme!),
      ...(textBorderColor === theme?.colors.white && {
        color: theme.colors.primary.main,
      }),
      backgroundColor: textBorderColor,
    }),
    ...(variant === 'outlined' && {
      ...ButtonOutlined(),
      color: textBorderColor,
      borderColor: textBorderColor,
    }),
    ...(variant === 'text' && {
      ...ButtonText(),
      color: textBorderColor,
    }),
  };
};

export const ButtonStyles = styled.button<ButtonStylesProps>(getButtonStyles);
