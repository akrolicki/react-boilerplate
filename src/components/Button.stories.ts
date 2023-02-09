import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    preset: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    preset: 'secondary',
    children: 'Button',
  },
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByText('Button');

  await userEvent.click(button);
};
