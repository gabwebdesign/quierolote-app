'use client';

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
import { FormSelectStyles } from './FormSelectStyles';
import { Select, SelectProps } from '@/components/atoms/Select/Select';

interface FormSelectProps<T extends FieldValues>
  extends SelectProps,
    Omit<SelectProps, 'name'> {
  register?: UseFormRegister<T>;
  name: Path<T>;
  rules?: RegisterOptions;
  errors?: Partial<DeepMap<T, FieldError>>;
}

export const FormSelect = <T extends FieldValues>({
  className,
  name,
  register,
  rules,
  errors,
  ...rest
}: FormSelectProps<T>) => {
  return (
    <FormSelectStyles className={className}>
      <Select name={name} {...rest} {...(register && register(name, rules))} />
      <ErrorMessage
        errors={errors}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        render={({ message }) => (
          <Typography variant="small" color="#FF0000">{message}</Typography>
        )}
      />
    </FormSelectStyles>
  );
};
