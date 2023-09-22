'use client';
import { Container } from '@/components/atoms/Container/Container';
import { Typography } from '@/components/atoms/Typography/Typography';
import { AgentCard } from '@/components/composites/agent-card/AgentCard';
import { ContactForm } from '@/components/composites/ContactForm/ContactForm';
import { Destacados } from '@/components/composites/destacados/Destacados';
import { Lote } from '@/components/composites/lote/Lote';
import { useTheme } from '@emotion/react';
import { Roboto } from 'next/font/google';
import { HTMLAttributes } from 'react';
import { LoteInfoStyles } from './LoteInfoStyles';
import { useAtomValue } from 'jotai';
import { lotAtom } from '@/store/atoms';
import { User } from '@/types/user';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export interface AgentCardProps extends HTMLAttributes<HTMLElement> {
  agentName: string;
  phone: string;
  email: string;
  pathImg: string;
}

const agentInfo: AgentCardProps = {
  agentName: 'Gusmar Atencio',
  phone: '86280691',
  email: 'gab.webdesign@gmail.com',
  pathImg: '/assets/images/agent.png',
};

export function LoteInfo() {
  const theme = useTheme();
  const lot = useAtomValue(lotAtom);

  return (
    <main className={roboto.className}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          backgroundColor: theme.colors.secondary.ligther,
        }}
      >
        <Container maxWidth="xl">
          <LoteInfoStyles>
            <div className="lote-info">
              <Lote />
            </div>
            <aside>
              <AgentCard
                agentName={(lot.user as User).name!}
                phone={(lot.user as User).phone!}
                email={(lot.user as User).email!}
                pathImg={'/assets/images/agent.png'}
              />

              <div className="contact-form-container">
                <center>
                  <Typography
                    align="center"
                    tag="h3"
                    variant="heading3"
                    color={theme.colors.purple}
                  >
                    ¿Quieres ser contactado?
                  </Typography>
                </center>
                <center>
                  <Typography>
                    Llena el siguiente formulario y nos pondremos en contacto
                    con usted.
                  </Typography>
                </center>

                <ContactForm />
              </div>
            </aside>
          </LoteInfoStyles>
        </Container>
      </div>

      <Destacados />
    </main>
  );
}
