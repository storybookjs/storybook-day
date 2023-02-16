import type { Meta, StoryObj } from '@storybook/react';
import { SpeakerSection } from './SpeakerSection';

const meta: Meta<typeof SpeakerSection> = {
  title: 'Components/SpeakerSection',
  component: SpeakerSection
};

export default meta;
type Story = StoryObj<typeof SpeakerSection>;

export const Default: Story = {
  args: {
    speaker: {
      name: 'Dominic Nguyen',
      bio:
        'Dominic Nguyen is a co-founder at Chromatic, the company behind Storybook. As a core maintainer of Storybook, he works on everything from developer experience to design to writing docs. Outside of work, you’ll find him motorcycling, cooking, or tromping around NYC.',
      title: 'Design',
      slug: 'dom',
      company: 'Chromatic',
      image: { url: 'https://avatars.githubusercontent.com/u/263385?v=4' },
      talk: {} as any
    }
  }
};

export const WithTwitter: Story = {
  args: {
    speaker: {
      ...Default.args?.speaker,
      twitter: 'string'
    } as any
  }
};

export const WithGithub: Story = {
  args: {
    speaker: {
      ...Default.args?.speaker,
      github: 'string'
    } as any
  }
};

export const WithBoth: Story = {
  args: {
    speaker: {
      ...Default.args?.speaker,
      twitter: 'string',
      github: 'string'
    } as any
  }
};
