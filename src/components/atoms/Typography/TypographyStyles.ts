'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';
import { TypographyProps } from './Typography';

interface TypographyStylesProps extends TypographyProps {
  theme?: Theme;
}

const TypographyBasic = (theme: Theme): Styles => ({
  fontFamily: theme.fontFamily.roboto,
  lineHeight: 1.2,
});

const TypographyParagraph = (theme: Theme): Styles => ({
  fontSize: theme.fontSizes.m,
  fontWeight: theme.fontWeight.regular,
});

const TypographyHeadingOne = (theme: Theme): Styles => ({
  fontSize: theme.fontSizes.title,
  fontWeight: theme.fontWeight.medium,
});

const TypographyHeadingTwo = (theme: Theme): Styles => ({
  fontSize: theme.fontSizes.xxl,
  fontWeight: theme.fontWeight.bold,
});

const TypographyHeadingThree = (theme: Theme): Styles => ({
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeight.bold,
});

const TypographyHeadingFour = (theme: Theme): Styles => ({
  fontSize: '22px',
  fontWeight: theme.fontWeight.bold,
});

const TypographySmall = (theme: Theme): Styles => ({
  fontSize: theme.fontSizes.s,
  fontWeight: theme.fontWeight.regular,
});

const getTypographyStyles = ({
  fontWeight,
  theme,
  textSize,
  textTransform,
  gutterBottom,
  color,
  variant,
}: TypographyStylesProps) => ({
  ...TypographyBasic(theme!),
  ...(variant === 'paragraph' && TypographyParagraph(theme!)),
  ...(variant === 'heading1' && TypographyHeadingOne(theme!)),
  ...(variant === 'heading2' && TypographyHeadingTwo(theme!)),
  ...(variant === 'heading3' && TypographyHeadingThree(theme!)),
  ...(variant === 'heading4' && TypographyHeadingFour(theme!)),
  ...(variant === 'small' && TypographySmall(theme!)),
  ...(fontWeight && { fontWeight: theme!.fontWeight[fontWeight] }),
  ...(textSize && { fontSize: theme!.fontSizes[textSize] }),
  ...(textTransform && { textTransform }),
  ...(gutterBottom && { paddingBottom: gutterBottom }),
  ...(color && { color }),
});

export const TypographyStyles =
  styled.p<TypographyStylesProps>(getTypographyStyles);
