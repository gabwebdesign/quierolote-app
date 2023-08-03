'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';
import { generateBreakpoint } from '@/utils/css/utilities';
import { ContainerProps } from './Container';

interface ContainerStylesProps extends ContainerProps {
  theme?: Theme;
}

const ContainerBasic = (theme: Theme): Styles => ({
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingLeft: theme.container.gutters.mobile,
  paddingRight: theme.container.gutters.mobile,
  [generateBreakpoint('min-width', theme.breakpoints.md)]: {
    paddingLeft: theme.container.gutters.desktop,
    paddingRight: theme.container.gutters.desktop,
  },
});

const ContainerNoGutter = (theme: Theme): Styles => ({
  paddingLeft: 0,
  paddingRight: 0,
  [generateBreakpoint('min-width', theme.breakpoints.md)]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

const ContainerMaxWidth = ({
  theme,
  maxWidth,
}: ContainerStylesProps): Styles => {
  const breakpointValue = theme!.breakpoints[maxWidth!];
  return {
    [generateBreakpoint('min-width', breakpointValue)]: {
      maxWidth: breakpointValue,
    },
  };
};

const getContainerStyles = ({
  theme,
  disableGutters,
  maxWidth,
}: ContainerStylesProps) => ({
  ...ContainerBasic(theme!),
  ...(disableGutters && ContainerNoGutter(theme!)),
  ...(maxWidth && ContainerMaxWidth({ theme, maxWidth })),
});

export const ContainerStyles =
  styled.section<ContainerStylesProps>(getContainerStyles);
