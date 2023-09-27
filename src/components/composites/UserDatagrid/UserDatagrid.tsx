'use client';
import 'react-data-grid/lib/styles.css';
import { DatagridUI } from '@/components/atoms/DatagridUI/DatagridUI';
import { capitalize } from '@/utils/css/utilities';
import { Column, RenderCellProps } from 'react-data-grid';
import { Button } from '@/components/atoms/Button/Button';
import { User } from '@/types/user';

const columns: Column<Row>[] = [
  {
    key: 'id',
    name: 'ID',
  },
  { key: 'name', name: 'Nombre' },
  { key: 'phone', name: 'Celular' },
  { key: 'email', name: 'Email' },
  {
    key: 'edit',
    name: 'Editar',
    renderCell: ({ row }: RenderCellProps<Row>) => {
      return (
        <Button
          variant="text"
          color="primary"
          rel="noreferrer"
          href={`/admin/users/${row.id}`}
          tag="a"
        >
          Editar Usuario
        </Button>
      );
    },
  },
];

interface UserDatagridProps {
  users?: User[] | null;
}

interface Row {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export const UserDatagrid = ({ users }: UserDatagridProps) => {
  
  const rows = users?.map((user, i) => ({
    id: `${user._id}`,
    name: capitalize(user.name!),
    phone: user.phone!,
    email: user.email!,
  }));

  return <>{rows && <DatagridUI rows={rows} columns={columns} />}</>;
};
