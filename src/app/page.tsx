'use client';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Grid } from '@/components/atoms/Grid/Grid';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const theme = useTheme();
  return (
    <main className={roboto.className}>
      <Container maxWidth="xl">
        <Grid columnSize="379px" gap={31}>
          <div style={{ backgroundColor: 'red' }}>Test</div>
          <div style={{ backgroundColor: 'blue' }}>Test</div>
          <div style={{ backgroundColor: 'yellow' }}>Test</div>
        </Grid>
        <Icon name="Logo" width={90} />
        <Typography variant="heading1" color={theme.colors.primary.main}>Text</Typography>
      </Container>
    </main>
  );
}
