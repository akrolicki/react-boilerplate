import { forwardRef } from 'react';

import FormField, { FormFieldProps } from './FormField';
import TextInput, { TextInputProps } from './TextInput';

type Props = Omit<TextInputProps, 'hasError'> & Omit<FormFieldProps, 'children'>;

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, hint, error, id, className, ...props }, ref) => {
    return (
      <FormField
        label={label}
        hint={hint}
        error={error}
        id={id}
        disabled={props.disabled}
        className={className}
      >
        <TextInput hasError={!!error} id={id} {...props} ref={ref} />
      </FormField>
    );
  },
);

TextField.displayName = 'TextField';
export default TextField;
