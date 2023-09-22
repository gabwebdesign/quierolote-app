'use client';
import { lotAtom } from '@/store/atoms';
import { LoteGalleryStyles } from './LoteGalleryStyles';
import { useAtomValue } from 'jotai';

export const LoteGallery=()=>{
    const lot = useAtomValue(lotAtom);
    return(
        <LoteGalleryStyles>
            <div className='gallery'>
                <div className='big-image'>
                    <img src={lot.images![0]} />
                </div>
            </div>
        </LoteGalleryStyles>
    )
};