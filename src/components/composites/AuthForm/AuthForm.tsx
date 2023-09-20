'use client';

import { Button } from '@/components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { FormInput } from '../FormInput/FormInput';
import { isEmail } from '@/utils/validations/email';
import { AuthFormStyles } from './AuthFormStyles';
import { signIn, useSession } from 'next-auth/react';

type AuthFormProps = {
  email: string;
  password: string;
};

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormProps>();

  const onSubmit = async ({ email, password }: AuthFormProps) => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/admin/lots'
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <AuthFormStyles onSubmit={handleSubmit(onSubmit)}>
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
        type="password"
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
