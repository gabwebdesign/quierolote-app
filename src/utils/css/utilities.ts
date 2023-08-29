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

export const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
