import { LabelProps, Root } from '@radix-ui/react-label';

type Props = LabelProps & {
  disabled?: boolean;
};

const Label = ({ children, ...props }: Props) => (
  <Root className="mb-1.5 text-xs" {...props}>
    {children}
  </Root>
);

export default Label;
