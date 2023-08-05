'use client';
import { HTMLAttributes, ReactNode } from 'react';
import { TypographyStyles } from './TypographyStyles';
import { theme } from '@/themes/theme';

export interface TypographyProps
  extends HTMLAttributes<
    HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
  > {
  tag?: Tag;
  children?: ReactNode;
  fontWeight?: FontWeight;
  textTransform?: TextTransform;
  textSize?: FontSize;
  gutterBottom?: string;
  color?: string;
  variant?: TextVariant;
}

type Tag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'small';
type FontWeight = keyof typeof theme.fontWeight;
type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';
type FontSize = keyof typeof theme.fontSizes;
type TextVariant =
  | 'paragraph'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'small';

export const Typography = ({
  tag = 'p',
  variant = 'paragraph',
  children,
  ...rest
}: TypographyProps) => {
  const TypographyComponent = TypographyStyles.withComponent(tag);

  return (
    <TypographyComponent variant={variant} {...rest}>
      {children}
    </TypographyComponent>
  );
};
