"use client"
import { Container } from '@/components/atoms/Container/Container';
import { Typography } from '@/components/atoms/Typography/Typography';
import { AgentCard } from '@/components/composites/agent-card/AgentCard';
import { ContactForm } from '@/components/composites/ContactForm/ContactForm';
import { Destacados } from '@/components/composites/destacados/Destacados';
import { Footer } from '@/components/composites/footer/Footer';
import { Header } from '@/components/composites/Header/Header';
import { Lote } from '@/components/composites/lote/Lote';
import { useTheme } from '@emotion/react';
import { Roboto } from 'next/font/google';
import { HTMLAttributes } from 'react';
import { PageStyles } from './pageStyles';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

export interface AgentCardProps
  extends HTMLAttributes<HTMLElement> {
  agentName:string;
  phone:string;
  email:string;
  pathImg:string;
}

const agentInfo:AgentCardProps = {
  agentName:'Gusmar Atencio',
  phone:'86280691',
  email:'gab.webdesign@gmail.com',
  pathImg:'/assets/images/agent.png'
}

export default function LoteInfo() {
  const theme = useTheme();

  return (
    <main className={roboto.className}>
      <div style={{ 
        display: 'flex', 
        width: '100%',
        backgroundColor:theme.colors.secondary.ligther}}>
                <Container maxWidth="xl">
                  <PageStyles>
                    <div className='lote-info'>
                      <Lote />
                    </div>
                    <aside>
                      <AgentCard
                        agentName={agentInfo.agentName}
                        phone={agentInfo.phone}
                        email={agentInfo.email}
                        pathImg={agentInfo.pathImg}
                      />

                       <div className='contact-form-container'>
                            <center>
                              <Typography align="center" tag='h3' variant='heading3' color={theme.colors.purple}>
                                  ¿Quieres ser contactado?
                              </Typography>
                            </center>
                            <center>
                            <Typography>
                                Llena el siguiente formulario y nos pondremos en contacto con usted.
                            </Typography>
                            </center>

                            <ContactForm />
                        </div> 

                    </aside>
                  </PageStyles>
                </Container>
      </div>

      <Destacados />
    </main>
  );
}
