'use client';
import { Container } from '@/components/atoms/Container/Container';
import { useState } from 'react';
import { CardLote } from '@/components/composites/card-lote/CardLote';
import { PaginationComp } from '@/components/composites/paginationComp/PaginationComp';
import { FilterForm } from '@/components/composites/FilterForm/FilterForm';
import { useAtomValue } from 'jotai';
import { lotsAtom } from '@/store/atoms';
import { roboto } from '@/utils/css/utilities';

export default function PaginationPage() {
  const lotes = useAtomValue(lotsAtom);
  const [currentPage, setCurrentPage] = useState(1);
  const [lotesPerPage, setlotesPerPage] = useState(10);

  // Get current lotes
  const indexOfLastLotes = currentPage * lotesPerPage;
  const indexOfFirstLotes = indexOfLastLotes - lotesPerPage;
  const currentLotes = lotes?.slice(indexOfFirstLotes, indexOfLastLotes);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={roboto.className}>
      <Container maxWidth="xl">
        <FilterForm />
      </Container>
      <Container
        maxWidth="xl"
        style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {currentLotes?.map((lote, index) => {
          return (
            <CardLote
              key={index}
              shortDresciption={lote.descripcion}
              mide={`${lote.detalles!.terreno!}`}
              price={`${lote.detalles!.precio!}`}
              location={`${
                lote!.direccion?.provincia
              }, ${lote!.direccion?.canton}, ${
                lote!.direccion?.distrito
              }`}
              pathImg={lote.images![0]}
              id={lote._id}
            />
          );
        })}
      </Container>
      <Container maxWidth="xl">
        <PaginationComp
          lotesPerPage={lotesPerPage}
          totalLotes={lotes?.length || 0}
          paginate={paginate}
        />
      </Container>
    </main>
  );
}
