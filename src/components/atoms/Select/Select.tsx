import { ForwardedRef, SelectHTMLAttributes, forwardRef } from 'react';
import { SelectStyles } from './SelectStyles';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  name?: string;
  label?: string;
}

const SelectFC = (props: SelectProps, ref?: ForwardedRef<HTMLSelectElement>) => {
  return <SelectStyles {...props} ref={ref} />;
};

export const Select = forwardRef(SelectFC);
