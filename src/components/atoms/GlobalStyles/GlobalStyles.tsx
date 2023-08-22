import { theme } from '@/themes/theme';
import { Styles } from '@/types/common';
import { Global } from '@emotion/react';

const generalStyles = (): Styles => ({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  html: { maxwidth: '100vw', overflowx: 'hidden' },
  body: {
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
});

const globalClasses = (): Styles => ({
  '.font-regular': {
    fontWeight: theme.fontWeight.regular,
  },
  '.font-bold': {
    fontWeight: theme.fontWeight.bold,
  },
});

const GlobalStylesCSS = [{ ...generalStyles(), ...globalClasses() }];

export const GlobalStyles = () => {
  return <Global styles={GlobalStylesCSS} />;
};
