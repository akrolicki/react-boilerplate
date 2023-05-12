import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useEffect, useRef } from 'react';
import { IconBugReport, IconSearch } from 'src/icons';

import TextField from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: ComponentProps<typeof TextField>) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <div className="mb-8 flex gap-4">
        <TextField id="field-1" label="Email" placeholder="Placeholder" {...args} />
        <TextField
          id="field-2"
          label="Email"
          placeholder="Placeholder"
          PrefixIcon={IconSearch}
          {...args}
        />
        <TextField
          id="field-3"
          label="Email"
          placeholder="Placeholder"
          SufixIcon={IconBugReport}
          {...args}
        />
      </div>
      <div className="mb-8 flex gap-4">
        <TextField
          id="field-4"
          label="Email"
          hint="This is a hint text to help user."
          placeholder="Placeholder"
          {...args}
        />
        <TextField
          id="field-5"
          label="Email"
          hint="This is a hint text to help user."
          error="This is an error message."
          placeholder="Placeholder"
          {...args}
        />
      </div>
      <div className="flex gap-4">
        <TextField
          id="field-6"
          label="Email"
          placeholder="PrefixIcon"
          PrefixIcon={IconSearch}
          {...args}
        />
        <TextField
          id="field-7"
          label="Email"
          placeholder="SufixIcon"
          SufixIcon={IconBugReport}
          {...args}
        />
      </div>
    </div>
  );
};

export const Sm: Story = {
  render: (args) => <Template {...args} />,
  args: {
    size: 'sm',
  },
};

export const Md: Story = {
  render: (args) => <Template {...args} />,
  args: {
    size: 'md',
  },
};

export const Lg: Story = {
  render: (args) => <Template {...args} />,
  args: {
    size: 'lg',
  },
};
