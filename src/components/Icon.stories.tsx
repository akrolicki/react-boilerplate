import type { StoryObj } from '@storybook/react';
import * as Icons from 'src/icons';

const meta = {
  title: 'Components/Icons',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {Object.values(Icons).map((Icon, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-400 bg-gray-100 p-2 text-gray-900"
          >
            <Icon width={48} height={48} />
            {Icon.name.replace('Svg', '')}
          </div>
        );
      })}
    </div>
  ),
};
