import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Typography } from '@/components/atoms/Typography/Typography';
import { AgentCard } from '@/components/composites/agent-card/AgentCard';
import { Destacados } from '@/components/composites/destacados/Destacados';
import { Faq } from '@/components/composites/faq/faq';
import { Footer } from '@/components/composites/footer/Footer';
import { Header } from '@/components/composites/Header/Header';
import { Hero } from '@/components/composites/hero/Hero';
import { Lote } from '@/components/composites/lote/Lote';
import { LoteGallery } from '@/components/composites/lote/lote-gallery/LoteGallery';
import { Servicios } from '@/components/composites/servicios/Servicios';
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
  return (
    <main className={roboto.className}>
      <Header />
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
          </aside>
        </PageStyles>
      </Container>
      <Destacados />
      <Footer />
    </main>
  );
}
