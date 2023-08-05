import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Grid } from '@/components/atoms/Grid/Grid';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className={roboto.className}>
      <Container maxWidth="xl">
        <Grid columnSize="379px">
          <div style={{ backgroundColor: 'red' }}>Test</div>
          <div style={{ backgroundColor: 'blue' }}>Test</div>
          <div style={{ backgroundColor: 'yellow' }}>Test</div>
        </Grid>
        <Icon name="Search" fill="red" width={100} height={100} />
      </Container>
    </main>
  );
}
