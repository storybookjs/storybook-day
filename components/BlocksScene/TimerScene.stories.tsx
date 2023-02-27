import type { Meta, StoryObj } from '@storybook/react';
import { TimerScene } from './TimerScene';

const meta: Meta<typeof TimerScene> = {
  title: 'BlocksScene/TimerScene',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'blue' }
  },
  decorators: [
    Story => (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', width: '100%' }}>
        <Story />
      </div>
    )
  ],
  component: TimerScene
};
export default meta;
type Story = StoryObj<typeof TimerScene>;

export const Default: Story = {
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};
