import { Faq } from '@/components/composites/faq/faq';
import { Footer } from '@/components/composites/footer/Footer';
import { Header } from '@/components/composites/Header/Header';
import { Hero } from '@/components/composites/hero/Hero';
import { Servicios } from '@/components/composites/servicios/Servicios';
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
      <Header />
      <Hero />
      <Servicios />
      <Faq />
      <Footer />
      {/* <Hero>
        <Container maxWidth="xl">
          <div className="hero">
            <div>
              <Typography
                variant="heading1"
                textTransform="uppercase"
                color={theme.colors.white}
              >
                Asesoría para lograr sus metas.
              </Typography>
            </div>
            <div
              id="form"
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Typography variant='paragraph' color={theme.colors.primary.main}>
                Nuestros Servicios
              </Typography>
            </div>
          </div>
        </Container>
      </Hero> */}
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
