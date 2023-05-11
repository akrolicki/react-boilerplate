// import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useEffect, useRef } from 'react';
import { IconBugReport, IconDownload } from 'src/icons';

import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: ComponentProps<typeof Button>) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <div className="mb-4 flex gap-4">
        <Button {...args}>Button</Button>
        <Button preset={args.preset} ref={ref}>
          Focus
        </Button>
        <Button preset={args.preset} Icon={IconBugReport}>
          Button
        </Button>
        <Button disabled preset={args.preset}>
          Disabled
        </Button>
        <Button size="small" preset={args.preset}>
          Small
        </Button>
      </div>
      <div className="flex gap-4">
        <Button preset={args.preset} className="w-80">
          Button with longer text and limited width lorem ipsum
        </Button>
        <Button preset={args.preset} Icon={IconDownload} className="w-80">
          Button with longer text, icon and limited width lorem ipsum
        </Button>
      </div>
    </div>
  );
};

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    preset: 'primary',
  },
};

export const Secondary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    preset: 'secondary',
  },
};
