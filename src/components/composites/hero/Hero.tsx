'use client';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { HeroStyles } from './HeroStyles';

export const Hero=()=>{
    const theme = useTheme();
    return(
        <HeroStyles>
            <Container maxWidth="xl">
                <div className="hero">
                    <div className='message'>
                        <Typography
                            tag='h1'
                            variant="heading1"
                            textTransform="uppercase"
                            color={theme.colors.white}
                        >
                            Asesoría para<br /> lograr sus metas.
                        </Typography>
                        <Button>Más Información</Button>
                    </div>
                    <div
                        className="form"
                    >
                        <Typography tag='h3' variant='heading3' color={theme.colors.purple}>
                            ¿Quieres anunciar tu lote?
                        </Typography>
                        <Typography>
                            Llena el siguiente formulario y nos pondremos en contacto con usted.
                        </Typography>
                        <Button>Subir Archivo</Button>
                        <Button>Enviar Información</Button>
                    </div>
                </div>
            </Container>
        </HeroStyles>
    )
};