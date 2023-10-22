'use client';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { CardIcon, CardIconProps } from '../CardIcon/CardIcon';
import { FooterStyles } from './FooterStyles';
import { roboto } from '@/utils/css/utilities';

export const Footer=()=>{
    const theme = useTheme();

    return(
        <FooterStyles className={roboto.className}>
            <Container maxWidth="xl">
                <div className='footer-content'>
                    <div className="lotes">
                        <div>
                            <Typography className='mb'
                            fontWeight='bold'
                            color={theme.colors.white}
                            >Lotes:</Typography>
                            <ul>
                                <li><Button color='white'>En Venta</Button></li>
                                <li><Button color='white'>En Alquiler</Button></li>
                                <li><Button color='white'>En Oportunidad</Button></li>
                                <li><Button color='white'>Vendidos</Button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-info">
                        <Typography 
                            fontWeight='bold'
                            color={theme.colors.white}
                        >Contact Info</Typography>
                        <Typography color={theme.colors.white}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint comido
                        </Typography>
                        <Typography color={theme.colors.white}>
                            Todos los derechos reservados QuieroLote.com
                        </Typography>
                    </div>
                </div>
            </Container>
        </FooterStyles>
    )
};