import type { Meta } from '@storybook/react';

import Typography, { TypographyProps } from './Typography';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;

const allTypographyVariants: TypographyProps['variant'][] = [
  'heading3Xl',
  'heading2Xl',
  'headingXl',
  'headingL',
  'headingM',
  'headingS',
  'headingXs',
  'captionM',
  'captionS',
  'paragraphL',
  'paragraphM',
  'paragraphS',
  'paragraphXs',
  'textL',
  'textM',
  'textS',
  'textXs',
];

export const Default = () => {
  return (
    <div className="flex flex-col gap-4">
      {allTypographyVariants.map((variant, index) => (
        <div key={index}>
          <Typography variant="captionS" className="block text-gray-700">
            {variant}
          </Typography>
          <Typography variant={variant}>Fox jumps over the lazy dog</Typography>
        </div>
      ))}
    </div>
  );
};
