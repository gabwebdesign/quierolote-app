'use client';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { LoteInfoStyles } from './lote-infoStyles';

export const LoteInfo=()=>{
    const theme = useTheme();
    return(
        <LoteInfoStyles>
            <Container maxWidth="xl">
                <div className="LoteInfo">
                    <div className="detail-info">
                        <Typography tag='h3' variant='heading3' color={theme.colors.purple}>
                            ¿Quieres anunciar tu lote?
                        </Typography>
                        <Typography>
                            Llena el siguiente formulario y nos pondremos en contacto con usted.
                        </Typography>
                        <Button>Subir Archivo</Button>
                        <Button>Enviar Información</Button>
                    </div>
                    <div className='aside'>
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
                </div>
            </Container>
        </LoteInfoStyles>
    )
};