'use client';
import { LoteGalleryStyles } from './LoteGalleryStyles';

export const LoteGallery=()=>{
    return(
        <LoteGalleryStyles>
            <div className='gallery'>
                <div className='big-image'>
                    <img src='/assets/images/lote-big-image.png' />
                </div>
            </div>
        </LoteGalleryStyles>
    )
};