'use client';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Header } from '@/components/composites/Header/Header'
import { Hero } from '@/components/composites/hero/Hero'
import { Grid } from '@/components/atoms/Grid/Grid';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { Roboto } from 'next/font/google';
import { css } from '@emotion/react'

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
      <Header css={css`
          display: flex;
          justify-content: space-between;
          @media (min-width: 420px) {
            nav{
              display: block;
             }
          }
        `}>
        <Container maxWidth="xl" tag='div'>
          <nav>
            <div id='nav-brand'>
                <Icon name="Logo" width={190} height={40} />
            </div>
            <div id='menu' style={{ display: 'flex', justifyContent:'flex-end'}}>
              <Typography variant="p" color={theme.colors.primary.main}>Nuestros Servicios</Typography>
            </div>
          </nav>
        </Container>
      </Header>
      <Hero>
        <Container maxWidth="xl">
              <div className='hero'>
                  <div>
                    <Typography variant="heading1" textTransform='uppercase' color={theme.colors.white}>Asesoría para lograr sus metas.</Typography>
                  </div>
                  <div id='form' style={{ display: 'flex', justifyContent:'flex-end'}}>
                    <Typography variant="p" color={theme.colors.primary.main}>Nuestros Servicios</Typography>
                  </div>
              </div>
        </Container>
      </Hero>
      {/* <Container maxWidth="xl">
        <Grid columnSize="379px" gap={31}>
          <div style={{ backgroundColor: 'red' }}>Test</div>
          <div style={{ backgroundColor: 'blue' }}>Test</div>
          <div style={{ backgroundColor: 'yellow' }}>Test</div>
        </Grid>
        <Icon name="Logo" width={90} />
        <Typography variant="heading1" color={theme.colors.primary.main}>Text</Typography>
      </Container> */}
    </main>
  );
}
