import { GetStaticProps, GetStaticPaths } from 'next';
import { Button } from '@storybook/design-system';
import Page from '@components/page';
import { SpeakerSection } from '@components/Speaker';
import { getAllSpeakers } from '@lib/cms-api';
import { Speaker } from '@lib/types';
import { META_DESCRIPTION, MODE } from '@lib/constants';
import { Layout } from '@components/Layout';
import { NavCTA } from '@components/NavCTA';

type Props = {
  speaker: Speaker;
};

export default function SpeakerPage({ speaker }: Props) {
  const meta = {
    title: `${speaker.name} | Storybook Day`,
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout showFooter navCTA={<NavCTA mode={MODE} />}>
        <SpeakerSection speaker={speaker} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const speakers = await getAllSpeakers();
  const currentSpeaker = speakers.find((s: Speaker) => s.slug === slug) || null;

  if (!currentSpeaker) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      speaker: currentSpeaker
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const speakers = await getAllSpeakers();
  const slugs = speakers.map((s: Speaker) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
