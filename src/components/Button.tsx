import clsx from 'clsx';
import { overrideTailwindClasses } from 'tailwind-override';

type ButtonProps = React.ComponentProps<'button'> & {
  /**
   * Control an appearance of the button
   */
  preset?: 'primary' | 'secondary';
};

const Button = ({ children, className, preset = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={overrideTailwindClasses(
        clsx(
          'flex shrink-0 items-center justify-center rounded-md p-2 font-medium text-white transition focus:outline-none',
          {
            'bg-primary hover:bg-primary/90': preset === 'primary',
            'bg-secondary hover:bg-secondary/90': preset === 'secondary',
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
