import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ComponentType, SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
  'flex gap-1 shrink-0 items-center justify-center rounded-md font-medium text-white transition focus:outline-none',
  {
    variants: {
      preset: {
        primary: 'bg-primary-500 hover:bg-primary-400',
        secondary: 'bg-secondary-300 hover:bg-secondary-200',
      },
      size: {
        small: 'p-1',
        medium: 'p-2',
        large: 'p-3',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      preset: 'primary',
      size: 'medium',
    },
  },
);

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> & {
    Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  };

const Button = ({ children, className, preset, size, fullWidth, Icon, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(clsx(buttonStyles({ preset, size, fullWidth }), className))}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5 shrink-0" />}
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
