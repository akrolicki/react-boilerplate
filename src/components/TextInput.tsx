import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ComponentProps, ComponentType, forwardRef, SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

const textInputStyles = cva(
  [
    'border w-full rounded-lg py-2.5 px-4 border-gray-600 focus:outline-none',
    'disabled:bg-gray-200 disabled:text-gray-600',
    'placeholder:text-gray-700',
  ],
  {
    variants: {
      size: {
        lg: 'h-14',
        md: 'h-12',
        sm: 'h-10',
      },
      hasError: {
        true: 'border-[red] focus:shadow-focus-danger',
        false: 'focus:border-gray-800 focus:shadow-focus-primary',
      },
    },
    defaultVariants: {
      size: 'sm',
      hasError: false,
    },
  },
);

const iconStyles = cva('pointer-events-none absolute flex h-5 w-5', {
  variants: {
    size: {
      lg: 'top-4.5',
      md: 'top-3.5',
      sm: 'top-2.5',
    },
    hasError: {
      true: 'text-[red]',
      false: 'text-gray-500',
    },
    position: {
      prefix: 'left-3',
      sufix: 'right-3',
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      position: 'prefix',
      className: 'left-3',
    },
    {
      size: 'md',
      position: 'prefix',
      className: 'left-3.5',
    },
    {
      size: 'lg',
      position: 'prefix',
      className: 'left-3.5',
    },
    {
      size: 'sm',
      position: 'sufix',
      className: 'right-3',
    },
    {
      size: 'md',
      position: 'sufix',
      className: 'right-3.5',
    },
    {
      size: 'lg',
      position: 'sufix',
      className: 'right-3.5',
    },
  ],
  defaultVariants: {
    size: 'sm',
    hasError: false,
  },
});

export type TextInputProps = VariantProps<typeof textInputStyles> &
  Omit<ComponentProps<'input'>, 'size'> & {
    PrefixIcon?: ComponentType<SVGProps<SVGSVGElement>>;
    SufixIcon?: ComponentType<SVGProps<SVGSVGElement>>;
    inputClassName?: string;
  };

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ hasError, size, className, inputClassName, PrefixIcon, SufixIcon, ...props }, ref) => {
    return (
      <div className={clsx('relative', className)}>
        {PrefixIcon && (
          <PrefixIcon className={clsx(iconStyles({ size, hasError, position: 'prefix' }))} />
        )}
        <input
          ref={ref}
          className={twMerge(
            clsx(
              textInputStyles({ size, hasError }),
              PrefixIcon ? 'pl-10' : 'pl-4',
              SufixIcon ? 'pr-10' : 'pr-4',
              inputClassName,
            ),
          )}
          {...props}
        />
        {SufixIcon && (
          <SufixIcon className={clsx(iconStyles({ size, hasError, position: 'sufix' }))} />
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
export default TextInput;
