import clsx from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import Label from './Label';

export type FormFieldProps = {
  children: ReactNode;
  label?: string;
  hint?: string;
  error?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
};

const FormField = ({ children, label, hint, error, id, disabled, className }: FormFieldProps) => {
  return (
    <div className={twMerge(clsx('flex flex-col', className))}>
      {label && (
        <Label htmlFor={id} disabled={disabled}>
          {label}
        </Label>
      )}
      {children}
      {(error || hint) && (
        <span className={clsx('mt-1.5 text-xs', error ? 'text-[red]' : 'text-gray-700')}>
          {error || hint}
        </span>
      )}
    </div>
  );
};

export default FormField;
