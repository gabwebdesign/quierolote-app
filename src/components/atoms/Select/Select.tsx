import { ForwardedRef, SelectHTMLAttributes, forwardRef } from 'react';
import { SelectStyles } from './SelectStyles';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  name?: string;
  label?: string;
  options: Option[];
}

type Option = {
  name: string;
  value: string;
};

const SelectFC = (
  { options, ...rest }: SelectProps,
  ref?: ForwardedRef<HTMLSelectElement>
) => {
  return (
    <SelectStyles {...rest} ref={ref}>
      {options.map(({ name, value }, index) => (
        <option key={`option-${name}-${index}`} value={value}>
          {name}
        </option>
      ))}
    </SelectStyles>
  );
};

export const Select = forwardRef(SelectFC);
