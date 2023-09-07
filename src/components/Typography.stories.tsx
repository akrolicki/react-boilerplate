import { twMerge } from 'tailwind-merge';

const meta = {
  title: 'Components/Typography',
  tags: ['autodocs'],
};

export default meta;

const allTypographyVariants = [
  'typography-heading-lg',
  'typography-heading-md',
  'typography-heading-sm',
];

export const Default = () => {
  return (
    <div className="flex flex-col gap-4">
      {allTypographyVariants.map((variant, index) => (
        <div key={index}>
          <div className={twMerge('block text-gray-700')}>{variant}</div>
          <div className={variant}>Fox jumps over the lazy dog</div>
        </div>
      ))}
    </div>
  );
};
