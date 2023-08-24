'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';

interface SelectStylesProps {
  theme?: Theme;
}

const SelectBasic = (theme: Theme): Styles => ({
  width: '100%',
  padding: '8px 11px',
  backgroundColor: theme.colors.secondary.dark,
  borderRadius: '8px',
  border: 'none',
  fontWeight: theme.fontWeight.bold,
  color: theme.colors.secondary.main,
  '&:focus': {
    outline: theme.colors.primary.main,
  },
  appearance: 'none',
  backgroundImage:
    'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPjxwYXRoIGlkPSJQb2x5Z29uXzEzIiBkYXRhLW5hbWU9IlBvbHlnb24gMTMiIGQ9Ik00LjUsMCw5LDlIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkgOSkgcm90YXRlKDE4MCkiIGZpbGw9IiM4NTE3YmYiLz48L3N2Zz4NCg==)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
  backgroundSize: '10px 10px',
});

const getSelectStyles = ({ theme }: SelectStylesProps) => ({
  ...SelectBasic(theme!),
});

export const SelectStyles = styled.select<SelectStylesProps>(getSelectStyles);
