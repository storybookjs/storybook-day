import type { Meta, StoryObj } from '@storybook/react';
import { VideoCard } from './VideoCard';

const meta: Meta<typeof VideoCard> = {
  title: 'Pages/Home/VideoCard',
  component: VideoCard,
  decorators: [storyFn => <div style={{ width: 600 }}>{storyFn()}</div>]
};
export default meta;
type Story = StoryObj<typeof VideoCard>;

export const Default: Story = {
  name: 'VideoCard',
  args: {
    bgColor: '#191B24',
    src: '/day/features/videos/nextjs-framework-sm.mp4'
  }
};

export const Another: Story = {
  name: 'VideoCard',
  args: {
    bgColor: '#E4F3FF',
    src: '/day/features/videos/perf-sm.mp4'
  }
};
