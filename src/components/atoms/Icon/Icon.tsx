'use client';
import { HTMLAttributes, ReactNode, SVGProps } from 'react';
import { IconStyles } from './IconStyles';
import { Icons } from './AvailableIcons';

export interface IconProps extends SVGProps<SVGSVGElement> {
  name?: AvailableIcons;
  fill?: string;
}

type AvailableIcons = keyof typeof Icons;

export const Icon = ({
  fill = '#44A31E',
  height,
  width,
  name = 'Logo',
  ...rest
}: IconProps) => {
  const Icon = Icons[name];

  return (
    <IconStyles
      width={width}
      height={height ? height : width}
      color={fill}
    >
      <Icon className='icon' fill={fill} {...rest} />
    </IconStyles>
  );
};
