import clsx from 'clsx';
import { overrideTailwindClasses } from 'tailwind-override';

type ButtonProps = React.ComponentProps<'button'> & {
  preset?: 'primary' | 'secondary';
};

const Button = ({ children, className, preset = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={overrideTailwindClasses(
        clsx(
          'flex shrink-0 items-center justify-center rounded-md p-2 font-medium transition focus:outline-none',
          {
            'bg-primary': preset === 'primary',
            'bg-secondary': preset === 'secondary',
          },
          className,
        ),
      )}
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
