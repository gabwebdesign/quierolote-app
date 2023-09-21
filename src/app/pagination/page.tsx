"use client"
import { Container } from '@/components/atoms/Container/Container';
import { AgentCard } from '@/components/composites/agent-card/AgentCard';
import { Destacados } from '@/components/composites/destacados/Destacados';
import { Footer } from '@/components/composites/footer/Footer';
import { Header } from '@/components/composites/Header/Header';
import { Lote } from '@/components/composites/lote/Lote';
import { useTheme } from '@emotion/react';
import { Roboto } from 'next/font/google';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardLote, CardLoteProps } from '@/components/composites/card-lote/CardLote';
import { PaginationComp } from '@/components/composites/paginationComp/PaginationComp';
import { FilterForm } from '@/components/composites/FilterForm/FilterForm';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

export default function LoteInfo() {
    const theme = useTheme();

    const[lotes, setLotes]=useState([]);
    const[loading, setLoading]=useState(false);
    const[currentPage, setCurrentPage]=useState(1);
    const[lotesPerPage, setlotesPerPage]=useState(10);

    // Get current lotes
    const indexOfLastLotes= currentPage * lotesPerPage;
    const indexOfFirstLotes= indexOfLastLotes- lotesPerPage;
    const currentLotes = lotes.slice(indexOfFirstLotes, indexOfLastLotes);
  
    // Change page
    const paginate = (pageNumber:number)=>{
        setCurrentPage(pageNumber)
    }

    // chamaco esto lo borra, lo reemplaza con lo que hace fetch del API
    const lotesData=[
        {
            ideal:'Vivienda',
            shortDresciption:'Construye en Heredia la casa de tus sueños',
            mide:'5000',
            price:'10.500.000',
            location:'Escazu, Santa Ana',
            pathImg:'lote.png'
        }
]

  useEffect(()=>{
    const fetchPosts = async()=>{
        setLoading(true);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setLotes(res.data);
        setLoading(false);
    }
    fetchPosts();
  },[])
  console.log(lotes)
  return (
    <main className={roboto.className}>
        <Container maxWidth='xl'>
            <FilterForm />
        </Container>
        <Container maxWidth="xl" 
            style={{ 
                display: 'flex', 
                width: '100%',
                flexWrap:'wrap',
                justifyContent:'space-around'}}>
            { currentLotes.map((lote,index)=>{
                            return(
                                <CardLote
                                    key={index} 
                                    ideal={lotesData[0].ideal}
                                    shortDresciption={lotesData[0].shortDresciption}
                                    mide={lotesData[0].mide}
                                    price={lote.id}
                                    location={lotesData[0].location}
                                    pathImg={lotesData[0].pathImg}
                                />
                            )
                })}
        </Container>
        <Container maxWidth="xl">
            <PaginationComp 
                lotesPerPage={lotesPerPage}
                totalLotes={lotes.length}
                paginate={paginate}
            />
        </Container>
    </main>
  );
}
