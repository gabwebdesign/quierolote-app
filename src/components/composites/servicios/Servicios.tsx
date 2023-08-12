'use client';
import { Button } from '@/components/atoms/Button/Button';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { CardIcon } from '../CardIcon/CardIcon';
import { ServiciosStyles } from './ServiciosStyles';

export const Servicios=()=>{
    const theme = useTheme();
    return(
        <ServiciosStyles>
            <Container maxWidth="xl">
                <div className="Servicios">
                    <div className='message'>
                        <Typography
                            tag='h3'
                            variant="heading3"
                            color={theme.colors.primary.main}
                        >
                            Servicios <br />al propietario
                        </Typography>
                    </div>
                    <div
                        className=""
                    >
                        <CardIcon iconName={'Correduria'} serviceName={"Correduría"} />
                    </div>
                </div>
            </Container>
        </ServiciosStyles>
    )
};