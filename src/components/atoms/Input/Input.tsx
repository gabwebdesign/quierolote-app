import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { InputStyles } from './InputStyles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  type?: InputType;
}

type InputType = 'text' | 'email' | 'password' | 'checkbox' | 'file';

const InputFC = (props: InputProps, ref?: ForwardedRef<HTMLInputElement>) => {
  return (
    <InputStyles type={props.type}>
      <label htmlFor={props.id} className='label'>
        {props.label} <input {...props} ref={ref} />
      </label>
    </InputStyles>
  );
};

export const Input = forwardRef(InputFC);
