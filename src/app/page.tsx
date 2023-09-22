import { Destacados } from '@/components/composites/destacados/Destacados';
import { Faq } from '@/components/composites/faq/faq';
import { Hero } from '@/components/composites/hero/Hero';
import { Servicios } from '@/components/composites/servicios/Servicios';
import { dbLots } from '@/database';
import { Initializer } from '@/store/Initializer';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const getData = async () => dbLots.getLotsDestacados();

export default async function Home() {
  const data = await getData();

  return (
    <main className={roboto.className}>
      <Initializer lotsDestacados={data} />
      <Hero />
      <Destacados />
      <Servicios />
      <Faq />
    </main>
  );
}
