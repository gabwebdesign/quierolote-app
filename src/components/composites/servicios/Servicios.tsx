'use client';
import { Container } from '@/components/atoms/Container/Container';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { CardIcon, CardIconProps } from '../CardIcon/CardIcon';
import { ServiciosStyles } from './ServiciosStyles';

export const Servicios=()=>{
    const theme = useTheme();

    const icons:CardIconProps[] = [
        {
            iconName:'Correduria',
            serviceName:'Correduria'
        },
        {
            iconName:'Publicidad',
            serviceName:'Publicidad'
        },
        {
            iconName:'Peritaje',
            serviceName:'Peritaje'
        },
        {
            iconName:'TramitesBancarios',
            serviceName:'Tramites Bancarios'
        },
        {
            iconName:'EstudioPrecios',
            serviceName:'Estudio de precios basado en datos'
        },
        {
            iconName:'Diseño',
            serviceName:'Diseño y estudio de obra'
        },

    ]
    const iconsComprador:CardIconProps[] = [
        {
            iconName:'EstudioFinanciero',
            serviceName:'Estudio financiero de factibilidad económica.'
        },
        {
            iconName:'Search',
            serviceName:'Búsqueda de lote ideal para su proyecto.'
        },
        {
            iconName:'TramitesBancarios',
            serviceName:'Trámites para préstamos bancarios.'
        }

    ]
 
    return(
        <ServiciosStyles>
            <Container maxWidth="xl">
                <div className="servicios">
                    <div className='message'>
                        <Typography
                            tag='h3'
                            variant="heading3"
                            color={theme.colors.primary.main}
                        >
                            Servicios <br />al propietario
                        </Typography>
                    </div>
                    <div className="icons">
                        {/* <CardIcon iconName={'Correduria'} serviceName={"Correduría"} /> */}
                        {
                            icons.map((icon,index)=>{
                                return(
                                    <CardIcon key={index} iconName={icon.iconName} serviceName={icon.serviceName} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="servicios">
                    <div className='message'>
                        <Typography
                            tag='h3'
                            variant="heading3"
                            color={theme.colors.primary.main}
                        >
                            Servicios <br />al comprador
                        </Typography>
                    </div>
                    <div className="icons">
                        {/* <CardIcon iconName={'Correduria'} serviceName={"Correduría"} /> */}
                        {
                            iconsComprador.map((icon,index)=>{
                                return(
                                    <CardIcon key={index} iconName={icon.iconName} serviceName={icon.serviceName} />
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </ServiciosStyles>
    )
};