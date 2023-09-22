'use client';

import { Button } from '@/components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { FormInput } from '../FormInput/FormInput';
import { isEmail } from '@/utils/validations/email';
import { FormSelect } from '../FormSelect/FormSelect';
import { ContactFormStyles } from './ContactFormStyles';

type ContactForm = {
    name:string;
    email: string;
    phone: string;
    provincia: string;
    text:string;
    ventaAlquiler:string;
    dimensions:string;
    price:string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = handleSubmit((data) => {
    console.log({data})
    console.log('submitting...');
  });

  return (
    <ContactFormStyles onSubmit={onSubmit} action="mailto:gab.webdesign@gmail.com">

    <div className='form-wrapper'>
        <div className='form-container'>
            <div className='colum-form'>
                <input type="text" name="text" placeholder="Nombre*" required />
                <input type="tel" id="telefono" placeholder='Teléfono*' required />
                <input type="email" id="email" placeholder='E-mail*' required />
                <select name="quierolote" placeholder='Busco lote para:' required >
                    <option>Casa Propia</option>
                    <option>Inversión</option>
                </select>
                <textarea name="txtname" rows="4" cols="50" maxLength="200" placeholder='Quiero mas información de este lote encontrado en Quierolote.com' required />
            </div>
        </div>
    </div>

    <Button variant="contained" color="primary">
        Enviar Información
    </Button>
    
    </ContactFormStyles>
  );
};
