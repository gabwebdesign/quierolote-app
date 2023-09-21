'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';

interface DatagridStylesProps {
  theme?: Theme;
}

const DatagridBasic = (): Styles => ({
  padding: '50px 0',
});

const getDatagridStyles = ({}: DatagridStylesProps) => ({
  ...DatagridBasic(),
});

export const DatagridStyles =
  styled.div<DatagridStylesProps>(getDatagridStyles);
