'use client';
import { Container } from '@/components/atoms/Container/Container';
import { CardLote } from '../card-lote/CardLote';
import { DestacadosStyles } from './DestacadosStyles';
import { useAtomValue } from 'jotai';
import { lotsDestacadosAtom } from '@/store/atoms';

export const Destacados = () => {
  const lots = useAtomValue(lotsDestacadosAtom);

  if (!lots || lots?.length < 1) return null;

  return (
    <DestacadosStyles>
      <Container maxWidth="xl">
        <div className="destacados-content">
          {lots &&
            lots?.map((lote, index) => {
              return (
                <CardLote
                  key={index}
                  shortDresciption={lote.descripcion}
                  mide={`${lote.detalles!.terreno!}`}
                  price={`${lote.detalles!.precio!}`}
                  location={`${
                    (lote.direccion?.provincia, lote.direccion?.canton)
                  }`}
                  pathImg={lote.images![0]}
                  id={lote._id}
                />
              );
            })}
        </div>
      </Container>
    </DestacadosStyles>
  );
};
