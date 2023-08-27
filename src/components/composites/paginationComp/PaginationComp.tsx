'use client';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { PaginationCompStyles } from './PaginationCompStyles';

export interface PaginationProps {
    lotesPerPage:number;
    totalLotes:number;
    paginate:any;
}

export const PaginationComp=({ lotesPerPage, totalLotes, paginate }:PaginationProps)=>{
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLotes / lotesPerPage); i++) {
        pageNumbers.push(i);
    }
        
    return(
        <Container maxWidth="xl">
            <PaginationCompStyles>
                <ul className='pagination'>
                    {pageNumbers.map(numb => (
                        <li key={numb}>
                            <Button tag='a' onClick={()=> paginate(numb) }>
                                {numb}
                            </Button>
                        </li>
                    ))}
                </ul>
            </PaginationCompStyles>
        </Container>
    )
};