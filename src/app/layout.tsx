import { Footer } from '@/components/composites/footer/Footer';
import { GeneralThemeProvider } from '@/context/themeContext/GeneralThemeProvider';
export const metadata = {
  title: 'Quierolote',
  description: 'Encontrar su lote, asesores inmobiliarios, expertos en lotes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GeneralThemeProvider>
          {children} <Footer />
        </GeneralThemeProvider>
      </body>
    </html>
  );
}
