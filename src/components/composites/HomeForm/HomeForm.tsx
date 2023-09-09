'use client';

import { Button } from '@/components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { FormInput } from '../FormInput/FormInput';
import { isEmail } from '@/utils/validations/email';
import { FormSelect } from '../FormSelect/FormSelect';
import { HomeFormStyles } from './HomeFormStyles';

type HomeForm = {
    name:string;
    email: string;
    phone: string;
    provincia: string;
    text:string;
    ventaAlquiler:string;
    dimensions:string;
    price:string;
};

export const HomeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HomeForm>();

  const onSubmit = handleSubmit((data) => {
    console.log({data})
    console.log('submitting...');
  });

  return (
    <HomeFormStyles onSubmit={onSubmit}>

    <div className='form-wrapper'>
        <div className='form-container'>
            <div className='colum-form'>
                <FormInput
                    id="name"
                    type="text"
                    name="text"
                    label="nombre"
                    placeholder="Nombre*"
                    register={register}
                    rules={{ required: 'Su Nombre es requerido.'}}
                    errors={errors}
                />
                
                <FormInput
                    id="email"
                    type="text"
                    name="email"
                    label="Email"
                    placeholder="Email*"
                    register={register}
                    rules={{ required: 'Email es requerido.', validate: isEmail }}
                    errors={errors}
                />

                <FormSelect
                    id="select"
                    name="email"
                    label="select"
                    register={register}
                    defaultValue='San José'
                    options={[
                        {name: 'San José', value: '0'}, 
                        {name: 'Alajuela', value: '1'},
                        {name: 'Heredia', value: '2'},
                        {name: 'Cartago', value: '3'},
                        {name: 'Guanacaste', value: '4'},
                        {name: 'Limón', value: '5'},
                        {name: 'Puntarenas', value: '6'},
                    ]}
                errors={errors}
                />

                <FormInput
                    id="dimensions"
                    type="text"
                    name="text"
                    label="dimensions"
                    placeholder="Dimensiones*"
                    register={register}
                    rules={{ required: 'Dimensiones requeridas.' }}
                    errors={errors}
                />

            </div>

            <div className='colum-form'>

            <FormInput
                id="phone"
                type="tel"
                name="text"
                label="Teléfono"
                placeholder="Teléfono*"
                register={register}
                rules={{ required: 'Teléfono requerido.' }}
                errors={errors}
            />

            <FormSelect
                id="venta-alquiler"
                name="email"
                label="venta-alquiler"
                register={register}
                placeholder="En venta o alquiler"
                defaultValue='En venta o alquiler'
                options={[
                    {name: 'En Venta', value: 'venta'}, 
                    {name: 'En Alquiler', value: 'alquiler'}
                ]}
                errors={errors}
            />

            <FormInput
                id="price"
                type="text"
                name="text"
                label="Precio"
                placeholder="Precio*"
                register={register}
                rules={{ required: 'Precio requerido.' }}
                errors={errors}
            />

            <Button variant="outlined" color="primary">
                Subir Archivo +
            </Button>

            </div>
        </div>
    </div>

    <Button variant="contained" color="primary">
        Enviar Formulario
    </Button>
    
    </HomeFormStyles>
  );
};
