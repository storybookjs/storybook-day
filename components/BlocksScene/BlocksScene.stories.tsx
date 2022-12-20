import type { Meta, StoryObj } from '@storybook/react';
import { BlocksScene } from './BlocksScene';

const meta: Meta<typeof BlocksScene> = {
  title: 'BlocksScene/BlocksScene',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'blue' }
  },
  component: BlocksScene,
  argTypes: {
    focusDistance: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    bokehScale: { control: { type: 'range', min: 0, max: 20, step: 1 } },
    focalLength: { control: { type: 'range', min: 0, max: 1, step: 0.01 } }
  },
  args: {
    focusDistance: 0.5,
    bokehScale: 7,
    focalLength: 0.2
  }
};
export default meta;
type Story = StoryObj<typeof BlocksScene>;

export const Default: Story = {
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};
