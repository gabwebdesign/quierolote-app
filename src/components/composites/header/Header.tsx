'use client';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { useTheme } from '@emotion/react';
import { HeaderStyles } from './HeaderStyles';
import Link from 'next/link';
import { roboto } from '@/utils/css/utilities';

export const Header = () => {
  const theme = useTheme();
  return (
    <HeaderStyles className={roboto.className}>
      <Container maxWidth="xl" tag="div">
        <nav>
          <div id="nav-brand">
            <Icon name="Logo" width={190} height={40} fill={theme.colors.primary.main} />
          </div>
          <div
            id="menu"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <ul>
              <li>
                <Link href="/#servicios">Servicios</Link>
              </li>
              <li>
                <Link href="/pagination">Lotes Disponibles</Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </HeaderStyles>
  );
};
