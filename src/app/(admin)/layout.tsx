
import { HeaderAdmin } from '@/components/composites/HeaderAdmin/HeaderAdmin';

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
      <HeaderAdmin />
      {children}
    </>
  );
}
