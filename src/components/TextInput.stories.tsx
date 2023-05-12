import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useEffect, useRef } from 'react';
import { IconBugReport, IconDownload, IconSearch } from 'src/icons';

import TextInput from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: ComponentProps<typeof TextInput>) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <div className="mb-4 flex gap-4">
        <TextInput placeholder="Placeholder" {...args} />
        <TextInput defaultValue="Default value" {...args} />
        <TextInput defaultValue="Focus" ref={ref} {...args} />
        <TextInput defaultValue="Disabled" disabled {...args} />
        <TextInput defaultValue="Has Error" hasError {...args} />
      </div>
      <div className="flex gap-4">
        <TextInput placeholder="With prefix icon" PrefixIcon={IconSearch} {...args} />
        <TextInput placeholder="With sufix icon" SufixIcon={IconBugReport} {...args} />
        <TextInput
          defaultValue="With both prefix & sufix icons"
          PrefixIcon={IconSearch}
          SufixIcon={IconDownload}
          {...args}
        />
        <TextInput
          defaultValue="Disabled with icons"
          PrefixIcon={IconSearch}
          SufixIcon={IconBugReport}
          disabled
          {...args}
        />
        <TextInput
          defaultValue="Has error with icons"
          PrefixIcon={IconSearch}
          SufixIcon={IconBugReport}
          hasError
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
