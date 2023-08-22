'use client';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { LoteCardIcon, LoteIconProps } from '../lote-card-icon/LoteCardIcon';
import { LoteDetailsStyles } from './LoteDetailsStyles';

const loteFeature:LoteIconProps[] =[
    {
        iconName:'Mide',
        feature:'Mide',
        data:'5000'
    },
    {
        iconName:'Suelo',
        feature:'Uso del suelo',
        data:'5000'
    },
    {
        iconName:'Topografia',
        feature:'Topografía',
        data:'5000'
    },
    {
        iconName:'Mide',
        feature:'Avalúo',
        data:'5000'
    },
    {
        iconName:'TramitesBancarios',
        feature:'Se financia',
        data:'5000'
    },
    {
        iconName:'Alquiler',
        feature:'Lote en',
        data:'5000'
    },    
    {
        iconName:'Servicios',
        feature:'Constancia de servicios públicos',
        data:'5000'
    },
    {
        iconName:'Diseño',
        feature:'Plano de catastro',
        data:'5000'
    },
    {
        iconName:'EstudioFinanciero',
        feature:'Estudio de anteproyecto',
        data:'5000'
    },
    {
        iconName:'EstudioPrecios',
        feature:'Cuota de mantenimiento',
        data:'5000'
    },
    {
        iconName:'Star',
        feature:'Ideal para',
        data:'5000'
    }
]

export const LoteDetails = () => {
  const theme = useTheme();
  return (
    <LoteDetailsStyles>
      <div className='general-info'>
        <div className='price'>
            <Typography variant='heading1' color={theme.colors.primary.main} fontWeight='bold'>$15000</Typography>
            <Typography fontWeight='bold' textSize='xl'>5000 m<sup>2</sup></Typography>  
        </div>
        <div className='description'>
            <Typography fontWeight='bold' textSize='xl'>Santa Ana, Escazú, San Jose</Typography>  
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint comido</Typography>  
        </div>
      </div>
      <div className='details'>
            {
                loteFeature.map((feature,index)=>{
                    return(
                        <LoteCardIcon
                            key={index}
                            iconName={feature.iconName}
                            feature={feature.feature}
                            data={feature.data}
                        />
                    )
                })
                
            }
        </div>
    </LoteDetailsStyles>
  );
};
