'use client';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { useTheme } from '@emotion/react';
import { HeaderAdminStyles } from './HeaderAdminStyles';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button/Button';
import { signOut, useSession } from 'next-auth/react';
import { roboto } from '@/utils/css/utilities';
export const HeaderAdmin = () => {
  const theme = useTheme();
  const { status, data } = useSession();

  console.log({ data });

  return (
    <HeaderAdminStyles className={roboto.className}>
      <Container maxWidth="xl" tag="div">
        <nav>
          <div id="nav-brand">
            <Icon
              name="Logo"
              width={190}
              height={40}
              fill={theme.colors.primary.main}
            />
          </div>
          <div
            id="menu"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            {status === 'authenticated' && (
              <ul>
                <li>
                  <Link href="/admin/lots">Lotes</Link>
                </li>
                {data.user.role === 'admin' && (
                  <li>
                    <Link href="/admin/users/">Users</Link>
                  </li>
                )}
                <li>
                  <Button
                    variant="outlined"
                    onClick={() => signOut({ callbackUrl: '/auth' })}
                  >
                    Log Out
                  </Button>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </Container>
    </HeaderAdminStyles>
  );
};
