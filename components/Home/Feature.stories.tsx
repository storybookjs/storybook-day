import type { Meta, StoryObj } from '@storybook/react';
import { Feature } from './Feature';
import { VideoCard } from './VideoCard';
import { withPrefix } from '@lib/with-prefix';

const meta: Meta<typeof Feature> = {
  title: 'Pages/Home/Feature',
  component: Feature,
  parameters: {
    layout: 'centered'
  }
  // decorators: [StoryFn => <div style={{ maxWidth: 520 }}>{StoryFn()}</div>]
};
export default meta;
type Story = StoryObj<typeof Feature>;

export const Default: Story = {
  args: {
    title: 'Performance overhaul',
    description:
      'Lorem ipsum dolor sit amet consectatur vestibulum aret sit click, hover, and type inside your story file. Powered by Jest and Testing.',
    media: <img src="/day/features/stability.svg" />,
    bgColor: '#FEDED2'
  }
};

export const Video: Story = {
  args: {
    title: 'Performance overhaul',
    description:
      'Lorem ipsum dolor sit amet consectatur vestibulum aret sit click, hover, and type inside your story file. Powered by Jest and Testing.',
    media: (
      <VideoCard
        src={withPrefix('/features/videos/perf-sm.mp4')}
        poster={withPrefix('/features/videos/perf.png')}
        bgColor="#E3F1FE"
      />
    ),
    bgColor: '#E3F1FE'
  }
};

export const WithIcon: Story = {
  args: {
    title: 'TypeScript just works',
    description:
      'TypeScript works with Storybook. 7.0 expands type safety with new types and features powered by Typescript 4.9.',
    media: <img src="/day/features/typescript.svg" />,
    bgColor: '#E3F3FF',
    icon: '/day/features/typescript-icon.svg'
  }
};
