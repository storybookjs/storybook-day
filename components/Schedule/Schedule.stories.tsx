import { Stage } from '@lib/types';
import type { Meta, StoryObj } from '@storybook/react';
import { Schedule } from './Schedule';

const mockStages = [
  {
    name: 'Main Stage',
    slug: 'main',
    stream: 'https://www.youtube.com/embed/1-NzQ9ObsfM',
    discord: 'https://discord.com',
    isLive: true,
    roomId: 'main',
    stagePeers: [],
    backstagePeers: [],
    schedule: [
      {
        end: '2020-10-27T09:30-08:00',
        _uid: 'abe7b451-9e8d-4423-b19f-8d8e31bb9d94',
        start: '2020-10-27T09:00-08:00',
        title: 'Keynote',
        speaker: [
          {
            name: 'Blagun Dobromil',
            bio:
              'They have over ten years of experience building blazing-fast web applications with Next.js and Vercel. Outside of work, they enjoy hiking, skiing, and surfing. Before becoming a developer, they worked in finance for a Fortune 500 company.',
            title: 'Designer & Developer',
            slug: 'blagun',
            twitter: 'https://twitter.com/vercel',
            github: 'https://github.com/vercel',
            company: 'Company',
            image: { url: 'https://a.storyblok.com/f/101757/619x972/152194dcc2/image_blagun.jpeg' },
            talk: {
              end: '2020-10-27T09:30-08:00',
              _uid: 'abe7b451-9e8d-4423-b19f-8d8e31bb9d94',
              start: '2020-10-27T09:00-08:00',
              title: 'Keynote',
              speaker: [
                'f23bbaf3-de0f-4aa1-b24c-5ad72af27afe',
                '648fcd31-9fe5-46c8-a7a7-ab6e5d39e175',
                'f578ebc8-52c5-4831-aa22-00a4858cac2a'
              ],
              component: 'talk',
              description:
                "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
            },
            uuid: '648fcd31-9fe5-46c8-a7a7-ab6e5d39e175'
          },
          {
            name: 'Christa Collyn',
            bio:
              'They have over ten years of experience building blazing-fast web applications with Next.js and Vercel. Outside of work, they enjoy hiking, skiing, and surfing. Before becoming a developer, they worked in finance for a Fortune 500 company.',
            title: 'CEO',
            slug: 'christa',
            twitter: 'https://twitter.com/vercel',
            github: 'https://github.com/vercel',
            company: 'Company',
            image: { url: 'https://a.storyblok.com/f/101757/300x400/6f3ccf4183/image-31.jpeg' },
            talk: {
              end: '2020-10-27T09:30-08:00',
              _uid: 'abe7b451-9e8d-4423-b19f-8d8e31bb9d94',
              start: '2020-10-27T09:00-08:00',
              title: 'Keynote',
              speaker: [
                'f23bbaf3-de0f-4aa1-b24c-5ad72af27afe',
                '648fcd31-9fe5-46c8-a7a7-ab6e5d39e175',
                'f578ebc8-52c5-4831-aa22-00a4858cac2a'
              ],
              component: 'talk',
              description:
                "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
            },
            uuid: 'f23bbaf3-de0f-4aa1-b24c-5ad72af27afe'
          },
          {
            name: 'Harshad İrem',
            bio:
              'They have over ten years of experience building blazing-fast web applications with Next.js and Vercel. Outside of work, they enjoy hiking, skiing, and surfing. Before becoming a developer, they worked in finance for a Fortune 500 company.',
            title: 'Senior Software Engineer',
            slug: 'harshad',
            twitter: 'https://twitter.com/vercel',
            github: 'https://github.com/vercel',
            company: 'Company',
            image: { url: 'https://a.storyblok.com/f/101757/300x400/77833d7508/image-2.jpeg' },
            talk: {
              end: '2020-10-27T09:30-08:00',
              _uid: 'abe7b451-9e8d-4423-b19f-8d8e31bb9d94',
              start: '2020-10-27T09:00-08:00',
              title: 'Keynote',
              speaker: [
                'f23bbaf3-de0f-4aa1-b24c-5ad72af27afe',
                '648fcd31-9fe5-46c8-a7a7-ab6e5d39e175',
                'f578ebc8-52c5-4831-aa22-00a4858cac2a'
              ],
              component: 'talk',
              description:
                "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
            },
            uuid: 'f578ebc8-52c5-4831-aa22-00a4858cac2a'
          }
        ],
        component: 'talk',
        description:
          "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
      },
      {
        end: '2020-10-27T10:50-08:00',
        _uid: 'dc902e24-60be-4ea2-863f-2e6af281bd9b',
        start: '2020-10-27T10:10-08:00',
        title: 'Serverless Databases at the Edge',
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
              _uid: 'dc902e24-60be-4ea2-863f-2e6af281bd9b',
              start: '2020-10-27T10:10-08:00',
              title: 'Serverless Databases at the Edge',
              speaker: ['d81d530c-77a4-48b4-90fa-3561be660b97'],
              component: 'talk',
              description:
                "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
            },
            uuid: 'd81d530c-77a4-48b4-90fa-3561be660b97'
          }
        ],
        component: 'talk',
        description:
          "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
      },
      {
        end: '2020-10-27T11:30-08:00',
        _uid: '09f165e9-f3f8-4351-baa7-7a39ad2af942',
        start: '2020-10-27T10:50-08:00',
        title: 'Deploying to the Edge with Vercel',
        speaker: [
          {
            name: 'Neha Beatriu',
            bio:
              'They have over ten years of experience building blazing-fast web applications with Next.js and Vercel. Outside of work, they enjoy hiking, skiing, and surfing. Before becoming a developer, they worked in finance for a Fortune 500 company.',
            title: 'Founder',
            slug: 'neha',
            twitter: 'https://twitter.com/vercel',
            github: 'https://github.com/vercel',
            company: 'Company',
            image: { url: 'https://a.storyblok.com/f/101757/300x400/2e99fc366c/image-7.jpeg' },
            talk: {
              end: '2020-10-27T11:30-08:00',
              _uid: '09f165e9-f3f8-4351-baa7-7a39ad2af942',
              start: '2020-10-27T10:50-08:00',
              title: 'Deploying to the Edge with Vercel',
              speaker: ['a4e1cfa7-1223-4846-8298-d18b77875706'],
              component: 'talk',
              description:
                "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
            },
            uuid: 'a4e1cfa7-1223-4846-8298-d18b77875706'
          }
        ],
        component: 'talk',
        description:
          "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
      },
      {
        end: '2020-10-27T12:10-08:00',
        _uid: '8999941a-1335-4804-b999-6dee83454c1f',
        start: '2020-10-27T11:30-08:00',
        title: 'Building Your First E-Commerce Site',
        speaker: [
          {
            name: 'Lothaire Darius',
            bio:
              'They have over ten years of experience building blazing-fast web applications with Next.js and Vercel. Outside of work, they enjoy hiking, skiing, and surfing. Before becoming a developer, they worked in finance for a Fortune 500 company.',
            title: 'Software Developer',
            slug: 'lothaire',
            twitter: 'https://twitter.com/vercel',
            github: 'https://github.com/vercel',
            company: 'Company',
            image: { url: 'https://a.storyblok.com/f/101757/300x400/a9aadca6f9/image-25.jpeg' },
            talk: {
              end: '2020-10-27T12:10-08:00',
              _uid: '8999941a-1335-4804-b999-6dee83454c1f',
              start: '2020-10-27T11:30-08:00',
              title: 'Building Your First E-Commerce Site',
              speaker: ['37d50a73-0ea1-45f2-893b-98d28f7db7c2'],
              component: 'talk',
              description:
                "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
            },
            uuid: '37d50a73-0ea1-45f2-893b-98d28f7db7c2'
          }
        ],
        component: 'talk',
        description:
          "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
      },
      {
        end: '2020-10-27T12:40-08:00',
        _uid: 'eab09c9a-fa9d-44ad-ae08-23d8432eb282',
        start: '2020-10-27T12:20-08:00',
        title: 'Will React Survive in 2030?',
        speaker: [
          {
            name: 'Terese Kreka',
            bio:
              'They have over ten years of experience building blazing-fast web applications with Next.js and Vercel. Outside of work, they enjoy hiking, skiing, and surfing. Before becoming a developer, they worked in finance for a Fortune 500 company.',
            title: 'Senior Developer Advocate',
            slug: 'terese',
            twitter: 'https://twitter.com/vercel',
            github: 'https://github.com/vercel',
            company: 'Company',
            image: { url: 'https://a.storyblok.com/f/101757/300x400/10e0f4a595/image-13.jpeg' },
            talk: {
              end: '2020-10-27T12:10-08:00',
              _uid: 'eab09c9a-fa9d-44ad-ae08-23d8432eb282',
              start: '2020-10-27T11:30-08:00',
              title: 'Will React Survive in 2030?',
              speaker: ['553000cc-7dcc-4562-bd43-313ed18f450e'],
              component: 'talk',
              description:
                "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
            },
            uuid: '553000cc-7dcc-4562-bd43-313ed18f450e'
          }
        ],
        component: 'talk',
        description:
          "In this talk, you'll learn how Next.js and Vercel help transform the workflow of front-end developers. Hear about the latest developments with Next.js 10 and deploy your application with one click to Vercel."
      }
    ]
  }
];

const meta: Meta<typeof Schedule> = {
  title: 'Components/Schedule',
  component: Schedule,
  args: {
    allStages: mockStages as any
  }
};

export default meta;
type Story = StoryObj<typeof Schedule>;

export const Default: Story = {};
