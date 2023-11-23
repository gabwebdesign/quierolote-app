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
          <div id="nav-brand" className="nav-brand">
            <Link href='/'>
              <Icon name="Logo" width={190} height={40} fill={theme.colors.primary.main} />
            </Link>
            
          </div>
          <div
            id="menu"
            className="menu"
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
