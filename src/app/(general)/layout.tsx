import { Header } from '@/components/composites/Header/Header';
import { Footer } from '@/components/composites/footer/Footer';
import { GeneralThemeProvider } from '@/context/themeContext/GeneralThemeProvider';

export const metadata = {
  title: 'Quierolote',
  description: 'Encontrar su lote, asesores inmobiliarios, expertos en lotes',
};

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
