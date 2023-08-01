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

const ButtonText = (
  color: ButtonStylesProps['color'],
  theme: Theme
): Styles => ({
  background: 'none',
  color: getButtonColor(color, theme),
});

const ButtonContained = (
  color: ButtonStylesProps['color'],
  theme: Theme
): Styles => ({
  padding: '11px 14px',
  borderRadius: 8,
  backgroundColor: getButtonColor(color, theme),
  color: theme.colors.white,
  justifyContent: 'center',
});

const ButtonOutlined = (
  color: ButtonStylesProps['color'],
  theme: Theme
): Styles => {
  const textBorderColor = getButtonColor(color, theme);

  return {
    padding: '11px 14px',
    background: 'transparent',
    border: `3px solid ${textBorderColor}`,
    borderRadius: 8,
    color: textBorderColor,
    justifyContent: 'center',
  };
};

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

const getButtonStyles = ({ theme, variant, color }: ButtonStylesProps) => ({
  ...ButtonBasic(theme),
  ...(variant === 'contained' && ButtonContained(color, theme!)),
  ...(variant === 'outlined' && ButtonOutlined(color, theme!)),
  ...(variant === 'text' && ButtonText(color, theme!)),
});

export const ButtonStyles = styled.button<ButtonStylesProps>(getButtonStyles);
