'use client';
import { HTMLAttributes, ReactNode, SVGProps } from 'react';
import { IconStyles } from './IconStyles';
import { Icons } from './AvailableIcons';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name?: AvailableIcons;
  iconWidth?: string;
  iconHeight?: string;
  fill?: string;
}

type AvailableIcons = keyof typeof Icons;

export const Icon = ({
  fill = '#000',
  iconHeight,
  iconWidth,
  name = 'Logo',
  ...rest
}: IconProps) => {
  const Icon = Icons[name];

  return (
    <IconStyles
      width={iconWidth}
      height={iconHeight ? iconHeight : iconWidth}
      color={fill}
    >
      <Icon className='icon' fill={fill} {...rest} />
    </IconStyles>
  );
};
