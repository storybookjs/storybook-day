import type { Meta, StoryObj } from '@storybook/react';
import { TalkCard } from './TalkCard';

const meta: Meta<typeof TalkCard> = {
  title: 'Components/TalkCard',
  component: TalkCard,
  parameters: {
    layout: 'centered'
  }
};

export default meta;
type Story = StoryObj<typeof TalkCard>;

export const Default: Story = {
  args: {
    talk: {
      end: '2020-10-27T10:50-08:00',
      start: '2020-10-27T10:10-08:00',
      title: 'Serverless Databases at the Edge',
      section: 'intro',
      speaker: [
        {
          name: 'Ricohard Bohuslav',
          bio:
            'They have over ten years of experience building blazing-fast web applications with Next.js and Vercel. Outside of work, they enjoy hiking, skiing, and surfing. Before becoming a developer, they worked in finance for a Fortune 500 company.',
          title: 'Software Engineer',
          slug: 'ricohard',
          twitter: 'https://twitter.com/vercel',
          github: 'https://github.com/vercel',
          company: 'Company',
          image: {
            url: 'https://a.storyblok.com/f/101757/634x951/bf34efd79f/image_ricohard.jpeg'
          },
          talk: {
            end: '2020-10-27T10:50-08:00',
            start: '2020-10-27T10:10-08:00',
            title: 'Serverless Databases at the Edge',
            speaker: {} as any,
            section: 'intro',
            description:
              "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
          }
        }
      ],
      description:
        "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
    }
  }
};

export const inverse: Story = {
  args: { ...Default.args, inverse: true },
  parameters: { backgrounds: { default: 'dark' } }
};
