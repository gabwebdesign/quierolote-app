import { Destacados } from '@/components/composites/destacados/Destacados';
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
      <Hero />
      <Destacados />
      <Servicios />
      <Faq />
    </main>
  );
}
