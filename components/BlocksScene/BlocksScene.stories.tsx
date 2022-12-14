import type { Meta, StoryObj } from '@storybook/react';
import { BlocksScene } from './BlocksScene';

const meta: Meta<typeof BlocksScene> = {
  title: 'BlocksScene/BlocksScene',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'blue' }
  },
  component: BlocksScene
};
export default meta;
type Story = StoryObj<typeof BlocksScene>;

export const Default: Story = {
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};
