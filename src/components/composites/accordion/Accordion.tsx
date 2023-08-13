'use client';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { AccordionStyles } from './AccordionStyles';
import { HTMLAttributes, ReactNode, useState } from 'react';

export interface AccordionProps
  extends HTMLAttributes<HTMLElement> {
  question:string;
  text: string;
}

export const Accordion = ({
    question,
    text}:AccordionProps) => {
  const theme = useTheme();
  const [active, setActive]=useState(false);

  return (
    <AccordionStyles>
        <Typography fontWeight='bold'>{question}</Typography>
        <div className='control' onClick={()=> setActive(!active)}>
            <div className='control__button'>
            { !active && <span>+</span> }
            { active && <span>-</span> }
            </div>
        </div>
        { active && <div className='answer'>
            <Typography>{text}</Typography>
        </div> 
        }
    </AccordionStyles>
  );
};
