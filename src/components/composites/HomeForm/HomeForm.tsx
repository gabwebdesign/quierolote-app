'use client';

import { Button } from '@/components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { FormInput } from '../FormInput/FormInput';
import { isEmail } from '@/utils/validations/email';
import { AuthFormStyles } from './AuthFormStyles';
import { FormSelect } from '../FormSelect/FormSelect';

type HomeForm = {
  email: string;
  password: string;
  select: string;
  text:string;
  number:number;
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
    <AuthFormStyles onSubmit={onSubmit}>

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

    <FormInput
        id="phone"
        type="tel"
        name="number"
        label="phone"
        placeholder="Phone*"
        register={register}
        rules={{ required: 'Su teléfono es requerido.' }}
        errors={errors}
    />

      <FormSelect
        id="select"
        name="select"
        label="select"
        register={register}
        defaultValue="Select*"
        options={[{name: 'Option 1', value: '1'}, {name: 'Option 2', value: '2'}]}
        errors={errors}
      />
      <Button variant="contained" color="primary">
        Log In
      </Button>
    </AuthFormStyles>
  );
};
