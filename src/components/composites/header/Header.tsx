'use client';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { HeaderStyles } from './HeaderStyles';

export const Header = () => {
  const theme = useTheme();
  return (
    <HeaderStyles>
      <Container maxWidth="xl" tag="div">
        <nav>
          <div id="nav-brand">
            <Icon name="Logo" width={190} height={40} fill={theme.colors.primary.main} />
          </div>
          <div
            id="menu"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <a href='/#servicios'>
              Nuestros Servicios
            </a>
          </div>
        </nav>
      </Container>
    </HeaderStyles>
  );
};
