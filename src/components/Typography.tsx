import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const typographyStyles = cva('', {
  variants: {
    variant: {
      heading3Xl: 'text-h-3xl',
      heading2Xl: 'text-h-2xl',
      headingXl: 'text-h-xl',
      headingLg: 'text-h-lg',
      headingMd: 'text-h-md',
      headingSm: 'text-h-sm',
      headingXs: 'text-h-xs',
      captionMd: 'text-caption-md',
      captionSm: 'text-caption-sm',
      paragraphLg: 'text-lg',
      paragraphMd: 'text-md',
      paragraphSm: 'text-sm',
      paragraphXs: 'text-sx',
      textLg: 'text-lg font-semibold',
      textMd: 'text-md font-semibold',
      textSm: 'text-sm font-semibold',
      textXs: 'text-xs font-semibold',
    },
  },
  defaultVariants: {
    variant: 'textMd',
  },
});

export type TypographyProps = VariantProps<typeof typographyStyles> & {
  className?: string;
  children: ReactNode;
};

const Typography = ({ variant, className, children }: TypographyProps) => {
  const getHtmlTag = (variant: TypographyProps['variant']) => {
    switch (variant) {
      case 'heading3Xl':
        return 'h1';
      case 'heading2Xl':
        return 'h2';
      case 'headingXl':
      case 'headingLg':
        return 'h3';
      case 'headingMd':
        return 'h4';
      case 'headingSm':
        return 'h5';
      case 'headingXs':
        return 'h6';
      case 'paragraphLg':
      case 'paragraphMd':
      case 'paragraphSm':
      case 'paragraphXs':
        return 'p';
      default:
        return 'span';
    }
  };

  const TypographyHtmlTag = getHtmlTag(variant);

  return (
    <TypographyHtmlTag className={twMerge(clsx(typographyStyles({ variant }), className))}>
      {children}
    </TypographyHtmlTag>
  );
};

export default Typography;
