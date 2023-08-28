import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { InputStyles } from './InputStyles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  type?: InputType;
}

type InputType = 'text' | 'email' | 'password' | "tel";

const InputFC = (props: InputProps, ref?: ForwardedRef<HTMLInputElement>) => {
  return <InputStyles {...props} ref={ref} />;
};

export const Input = forwardRef(InputFC);
