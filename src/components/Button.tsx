import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
  'flex shrink-0 items-center justify-center rounded-md font-medium text-white transition focus:outline-none',
  {
    variants: {
      preset: {
        primary: 'bg-primary hover:bg-primary/90',
        secondary: 'bg-secondary hover:bg-secondary/90 rounded-2xl border-gray-800',
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

type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

const Button = ({ children, className, preset, size, fullWidth, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(clsx(buttonStyles({ preset, size, fullWidth }), className))}
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
