'use client';
import { HTMLAttributes, ReactNode } from 'react';
import { ButtonStyles } from './ButtonStyles';
import { MouseEvent } from 'react';

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  tag?: Tag;
  children?: ReactNode;
  href?: string;
  target?: Target;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: Variant;
  color?: Color;
}

type Tag = 'a' | 'button';
type Target = '_blank' | '_self';
type Variant = 'text' | 'outlined' | 'contained';
type Color = 'primary' | 'white';

export const Button = ({
  tag = 'button',
  children,
  startIcon,
  endIcon,
  onClick,
  className,
  variant = 'text',
  color = 'primary',
  ...rest
}: ButtonProps) => {
  const ButtonComponent = ButtonStyles.withComponent(tag);

  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <ButtonComponent
      onClick={onClick ? handleOnClick : undefined}
      variant={variant}
      color={color}
      {...rest}
    >
      {startIcon}
      {children}
      {endIcon}
    </ButtonComponent>
  );
};
