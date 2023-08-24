'use client';

import { Input, InputProps } from '@/components/atoms/Input/Input';
import {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
  DeepMap,
  FieldError,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Typography } from '@/components/atoms/Typography/Typography';

interface FormInputProps<T extends FieldValues>
  extends InputProps,
    Omit<InputProps, 'name'> {
  register?: UseFormRegister<T>;
  name: Path<T>;
  rules?: RegisterOptions;
  errors?: Partial<DeepMap<T, FieldError>>;
}

export const FormInput = <T extends FieldValues>({
  className,
  name,
  register,
  rules,
  errors,
  ...rest
}: FormInputProps<T>) => {
  return (
    <div className={className}>
      <Input name={name} {...rest} {...(register && register(name, rules))} />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => (
          <Typography variant="small" color="#FF0000">{message}</Typography>
        )}
      />
    </div>
  );
};
