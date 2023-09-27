'use client';
import { UserUpdateStyles } from './UserUpdateStyles';
import { useForm } from 'react-hook-form';
import { FormInput } from '../FormInput/FormInput';
import { Button } from '@/components/atoms/Button/Button';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types/user';
import { isEmail } from '@/utils/validations/email';
import { FormSelect } from '../FormSelect/FormSelect';
import quieroLoteApi from '@/api/quieroLoteApi';

export interface UserUpdateProps {
  user: User | null;
}

interface FormProps extends User {}

export const UserUpdate = ({ user }: UserUpdateProps) => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const router = useRouter();
  const isNewUser = useMemo(() => !user?._id, [user]);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: user ?? {},
  });

  const onSubmit = async (form: FormProps) => {
    setIsSaving(true);
    try {
      const { data } = await quieroLoteApi<{ status: number }>({
        url: isNewUser ? '/admin/usuarios' : `/admin/usuarios/${form._id}`,
        method: isNewUser ? 'POST' : 'PUT',
        data: form,
      });
      if (data.status === 200 || data.status === 201) {
        router.replace('/admin/users');
        setIsSaving(false);
      }
    } catch (error) {
      console.log({ error });
      setIsSaving(false);
    }
  };

  const handleDeleteUser = async () => {
    setIsSaving(true);
    try {
      const { data } = await quieroLoteApi<{ status: number }>({
        url: `/admin/usuarios/${getValues('_id')}`,
        method: 'DELETE',
      });
      if (data.status === 204) {
        router.replace('/admin/users');
        setIsSaving(false);
      }
    } catch (error) {
      console.log({ error });
      setIsSaving(false);
    }
  };

  return (
    <UserUpdateStyles>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          id="name"
          type="text"
          name="name"
          label="Nombre*"
          register={register}
          rules={{ required: 'Nombre es requerido.' }}
          errors={errors as any}
        />
        <FormInput
          id="phone"
          type="text"
          name="phone"
          label="Celular*"
          register={register}
          rules={{
            required: 'Celular es requerido.',
            maxLength: {
              value: 8,
              message: 'Debe de ser maximo 8 numeros',
            },
            minLength: {
              value: 8,
              message: 'Debe de ser minimo 8 numeros',
            },
            pattern: {
              value: /^[0-9]{8}$/i,
              message: 'Debe de ser solo numeros',
            },
          }}
          errors={errors as any}
        />
        <FormInput
          id="email"
          type="text"
          name="email"
          label="Email*"
          register={register}
          rules={{ required: 'Email es requerido.', validate: isEmail }}
          errors={errors as any}
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          label="Contrasena*"
          register={register}
          rules={{ required: 'Contrasena es requerido.' }}
          errors={errors as any}
        />
        <FormSelect
          id="role"
          name="role"
          label="Rol*"
          register={register}
          defaultValue="Rol*"
          options={[
            { name: 'Admin', value: 'admin' },
            { name: 'Agente', value: 'agente' },
          ]}
          rules={{
            required: 'Rol es requerido.',
          }}
          errors={errors as any}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isSaving}
        >
          {isNewUser ? 'Guardar' : 'Actualizar'}
        </Button>
        {!isNewUser && (
          <Button
            variant="outlined"
            color="primary"
            type="button"
            disabled={isSaving}
            onClick={handleDeleteUser}
          >
            Eliminar
          </Button>
        )}
      </form>
    </UserUpdateStyles>
  );
};
