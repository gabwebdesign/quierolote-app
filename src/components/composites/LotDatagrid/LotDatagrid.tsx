'use client';
import 'react-data-grid/lib/styles.css';
import { DatagridUI } from '@/components/atoms/DatagridUI/DatagridUI';
import { Lote } from '@/types/lote';
import { capitalize } from '@/utils/css/utilities';
import { Column, RenderCellProps } from 'react-data-grid';
import { Button } from '@/components/atoms/Button/Button';

const columns: Column<Row>[] = [
  {
    key: 'id',
    name: 'ID',
  },
  { key: 'title', name: 'Titulo' },
  { key: 'status', name: 'Estado' },
  { key: 'address', name: 'Direccion' },
  {
    key: 'edit',
    name: 'Editar',
    renderCell: ({ row }: RenderCellProps<Row>) => {
      return (
        <Button
          variant="text"
          color="primary"
          rel="noreferrer"
          href={`/admin/lots/${row.id}`}
          tag="a"
        >
          Editar Propiedad
        </Button>
      );
    },
  },
];

interface LotDatagridProps {
  lots?: Lote[] | null;
}

interface Row {
  id: string;
  title: string;
  status: string;
  address: string;
}

export const LotDatagrid = ({ lots }: LotDatagridProps) => {
  const rows = lots?.map((lot, i) => ({
    id: `${lot._id}`,
    title: capitalize(lot.titulo!),
    status: capitalize(lot.estado!),
    address: `${capitalize(lot.direccion?.provincia!)}, ${capitalize(
      lot.direccion?.canton!
    )}, ${capitalize(lot.direccion?.distrito!)}, ${capitalize(
      lot.direccion?.direccion!
    )}`,
  }));

  return <>{rows && <DatagridUI rows={rows} columns={columns} />}</>;
};
