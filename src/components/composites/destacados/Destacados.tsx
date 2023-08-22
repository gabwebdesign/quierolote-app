'use client';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { CardLote, CardLoteProps } from '../card-lote/CardLote';
import { DestacadosStyles } from './DestacadosStyles';

export const Destacados=()=>{
    const theme = useTheme();

    const lotes:CardLoteProps[]=[
        {
            ideal:'Vivienda',
            shortDresciption:'Construye en Heredia la casa de tus sueños',
            mide:'5000',
            price:'10.500.000',
            location:'Escazu, Santa Ana',
            pathImg:'lote.png'
        },
        {
            ideal:'Bodega',
            shortDresciption:'Construye en Heredia la casa de tus sueños',
            mide:'5000',
            price:'10.500.000',
            location:'Heredia, Santa Francisco',
            pathImg:'lote.png'
        },
        {
            ideal:'Vivienda',
            shortDresciption:'Construye en Heredia la casa de tus sueños',
            mide:'5000',
            price:'10.500.000',
            location:'Nicoya, Guanacaste',
            pathImg:'lote.png'
        }
    ]

    return(
        <DestacadosStyles>
            <Container maxWidth="xl">
                <div className='destacados-content'>
                    {
                        lotes.map((lote,index)=>{
                            return(
                                <CardLote
                                    key={index} 
                                    ideal={lote.ideal}
                                    shortDresciption={lote.shortDresciption}
                                    mide={lote.mide}
                                    price={lote.price}
                                    location={lote.location}
                                    pathImg={lote.pathImg}
                                />
                            )
                        })
                    }
                    
                </div>
            </Container>
        </DestacadosStyles>
    )
};