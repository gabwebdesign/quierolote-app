'use client';
import { useMemo } from 'react';
import DataGrid, { Column } from 'react-data-grid';
import { DatagridStyles } from './DatagridUIStyles';
import { roboto } from '@/utils/css/utilities';

export interface DatagridProps<TRow> {
  columns: Column<TRow>[];
  rows: TRow[];
}

export const DatagridUI = <TRow extends {id: string}>({ columns, rows }: DatagridProps<TRow>) => {
  const rowKeyGetter = (row: TRow) => useMemo(() => row?.id, [rows]);
  return (
    <DatagridStyles>
      <DataGrid
        columns={columns}
        rows={rows}
        rowKeyGetter={rowKeyGetter}
        className={roboto.className}
      />
    </DatagridStyles>
  );
};
