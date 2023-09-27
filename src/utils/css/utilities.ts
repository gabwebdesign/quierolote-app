import { Roboto } from 'next/font/google';
import { SUBSTRACT_WHEN_MAXWIDTH } from '../constants/constants';

type mediaDefinition = 'min-width' | 'max-width';

export const generateBreakpoint = (
  definition: mediaDefinition,
  breakpoint: number
): string => {
  const bp =
    definition === 'max-width'
      ? breakpoint - SUBSTRACT_WHEN_MAXWIDTH
      : breakpoint;

  return `@media (${definition}: ${bp}px)`;
};

export const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
