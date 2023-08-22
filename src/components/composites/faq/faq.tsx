'use client';
import { Container } from '@/components/atoms/Container/Container';
import { Icon } from '@/components/atoms/Icon/Icon';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { Accordion, AccordionProps } from '../accordion/Accordion';
import { FaqStyles } from './FaqStyles';

export const Faq = () => {
  const theme = useTheme();

  const faqs:AccordionProps[] =[
    {
        question:'¿Por qué vender o alquilar mi lote con quierolote.com?',
        text:'Encontrar un comprador o inquilino para su lote puede ser una tarea que involucra esfuerzos económicos y de capital humano Quierolote.com se encarga de gestionar todo lo relacionado a la publicidad en medios digitales e impresos, agenda y asistencia para citas de visitas a la propiedad, tramitación de documentos que aportan información importante como uso de suelo, disponibilidad de servicios públicos, elaboración de anteproyectos, etc. Así mismo se ofrece apoyo logístico al comprador o arrendatario para ayudarlo a tomar su decisión, como gestiones bancarias, estudios de mercado, y otros. Todo con el fin de lograr un cierre que satisfaga a todas las partes involucradas.'
    },
    {
        question:'¿Qué debo hacer para que Quierolote.com corra mi lote?',
        text:'Una vez que te pongas en contacto con nosotros, se programa una visita a la propiedad para hacer fotografías frontales y aéreas de la propiedad, valorar precio de venta, el paquete de servicios a contratar, la comisión de correduría inmobiliaria variable entre el 3% y el 5% de acuerdo con el precio final, y otros temas. Si las partes están de acuerdo, se formaliza un contrato de correduría inmobiliaria, en el cual se exponen las clausulas básicas del contrato, e inmediatamente quierolote.com comenzara su trabajo para lograr una venta o alquiler exitoso.'
    },
    {
        question:'¿En cuanto tiempo puedo vender o alquilar mi lote?',
        text:'Este tiempo no es fácil de predecir. El tiempo de cierre varía dependiendo de las impresiones que puedan generarse sobre su lote en los medios digitales e impresos, y sobre todo de la competitividad del precio final del lote con respecto a otros lotes con las mismas características en la zona.'
    },
    {
        question:'¿Qué pasa si vendo o alquilo la propiedad por mi cuenta?',
        text:'Si se ha formalizado un contrato de correduría, pero usted ha cerrado la propiedad por su cuenta, no se aplican cargos ni comisiones, sin perjuicio de los cargos ocasionados por la gestión de otros servicios por parte de Quierolote.com como tramites y estudios arquitectónicos, financieros, entre otros.'
    },    {
        question:'¿A través de que medios es difundida la oferta de mi propiedad?',
        text:'Quierolote.com tiene un equipo de marketing especializado que difunde su propiedad a través de las redes sociales propiedad de Quierolote.com, página web de Quierolote.com, y otras paginas aliadas como encuentra24.com, mercadolibre.com, Facebook.com, Inmotico.com, además de realizar campañas de marketing digital para llegar a los clientes de manera mas eficiente. Además, como medios impresos se publica un cartel con la descripción de la VENTA o ALQUILER en el sitio de la propiedad.'
    },
    {
        question:'¿Puedo contratar solo uno o varios servicios inmobiliarios sin pagar comisiones? (avalúo, uso de suelo, anteproyecto, estudio de servicios públicos)',
        text:'En la sección “servicios” (enlace) puede ver la oferta de otros servicios que son ofrecidos por Quierolote.com sujetos a una tarifa, que no implican realizar un contrato de correduría y por ende tampoco el pago de comisiones por venta o alquiler final.'
    },
    {
        question:'Quiero publicar mi propiedad en su portal web, pero no quiero pagar comisiones',
        text:'Puede hacer publicidad de su propiedad sin contratar un servicio de correduría inmobiliaria, pagando una tarifa justa y variable con relación al tiempo de publicación y potenciadores de marketing deseados. Llene el siguiente formulario para publicar su propiedad. (enlace).'
    },
    {
        question:'¿Estoy interesado en una propiedad de su portal web, que debo hacer?',
        text:'En la sección “contacto” (enlace) se encuentran los diferentes medios para contactarnos y darles más información sobre la propiedad de su interés.'
    },
    {
        question:'¿Qué debo tener en cuenta antes de comprar un lote?',
        text:'Dentro de la información importante a saber antes de comprar su lote usted debe valorar el uso de suelo, esto es un documento emitido por la Municipalidad que tiene jurisdicción en el lugar del lote, donde se establece para qué sirve ese lote, si es para residencia, comercio, industria, o es mixto, y además donde se establecen los limites en cuanto a capacidad habitable y de construcción. Además, es importante contar con estudios de disponibilidad de servicios públicos como agua, o electricidad. Si aun esta información no es suficiente, es importante tener una idea del proyecto que quiere realizar para ver si es viable financieramente en comparación de comprar un proyecto ya construido, y estudios geotécnicos para ver si la construcción es procedente.'
    },
    {
        question:'Quiero construir mi propio proyecto, pero tengo dudas acerca de su rentabilidad.',
        text:'Quierolote.com le ofrece toda la asesoría necesaria además de un paquete de estudios económicos, técnicos y de factibilidad donde se valora el dinero a invertir y el ahorro generado, para ayudarlo a tomar la decisión correcta.'
    },
    {
        question:'Quiero comprar un lote, pero no cuento con el capital.',
        text:'Usted puede comprar su lote financiándose con alguna entidad bancaria o financiera, con garantía de hipoteca sobre el lote. Quierolote.com lo ayuda en la búsqueda de su financiamiento.'
    },
  ]


  return (
    <FaqStyles>
      <Container maxWidth="xl" tag="div">
        <Typography
            tag='h3'
            variant="heading3"
            color={theme.colors.primary.main}>
            Preguntas Frecuentes
        </Typography>
        {  
            faqs.map((accordion,index)=>{
                return(
                    <Accordion 
                        key={index} 
                        question={accordion.question}
                        text={accordion.text}
                    />
                )
            })
        }
      </Container>
    </FaqStyles>
  );
};
