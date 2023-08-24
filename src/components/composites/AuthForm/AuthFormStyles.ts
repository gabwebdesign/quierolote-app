'use client';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';
import { Styles } from '@/types/common';

interface AuthFormStylesProps {
  theme?: Theme;
}

const AuthFormBasic = (theme: Theme): Styles => ({
  width: '375px',
  padding: '20px',
  boxShadow: '0px 0px 10px rgba(0,0,0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  borderRadius: '8px',
  margin: '50px auto',
});

const getAuthFormStyles = ({ theme }: AuthFormStylesProps) => ({
  ...AuthFormBasic(theme!),
});

export const AuthFormStyles =
  styled.form<AuthFormStylesProps>(getAuthFormStyles);
