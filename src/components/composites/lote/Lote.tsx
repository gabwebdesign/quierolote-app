'use client';
import { useTheme } from '@emotion/react';
import { LoteDetails } from './lote-details/LoteDetails';
import { LoteGallery } from './lote-gallery/LoteGallery';
import { LoteStyles } from './LoteStyles';

export const Lote=()=>{
    const theme = useTheme();
    return(
        <LoteStyles>
            <LoteGallery />
            <LoteDetails />
        </LoteStyles>
    )
};