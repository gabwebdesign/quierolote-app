'use client';

import { Button } from '@/components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { FormInput } from '../FormInput/FormInput';
import { isEmail } from '@/utils/validations/email';
import { AuthFormStyles } from './AuthFormStyles';

type AuthForm = {
  email: string;
  password: string;
};

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>();

  const onSubmit = handleSubmit((data) => {
    console.log('submitting...');
  });

  return (
    <AuthFormStyles onSubmit={onSubmit}>
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
        id="password"
        type="text"
        name="password"
        label="Contrasena"
        placeholder="Contraseña*"
        register={register}
        rules={{ required: 'Contraseña es requerido.' }}
        errors={errors}
      />
      <Button variant="contained" color="primary">
        Log In
      </Button>
    </AuthFormStyles>
  );
};
