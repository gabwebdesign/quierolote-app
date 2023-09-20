'use client';

import { theme } from '@/themes/theme';
import { ThemeProvider, CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { GlobalStyles } from '@/components/atoms/GlobalStyles/GlobalStyles';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'jotai';

interface Props {
  children?: React.ReactNode;
}

const quieroloteCache = createCache({ key: 'quierolote' });

export const GeneralThemeProvider = ({ children }: Props) => {
  return (
    <Provider>
      <SessionProvider>
        <CacheProvider value={quieroloteCache}>
          <GlobalStyles />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CacheProvider>
      </SessionProvider>
    </Provider>
  );
};
