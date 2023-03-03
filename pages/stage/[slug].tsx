import { GetStaticProps, GetStaticPaths } from 'next';
import { Global, css } from '@storybook/theming';
import Page from '@components/page';
import { StagePage } from '@components/Stage';
import { SkipNavContent as RSkipNavContent } from '@reach/skip-nav';

import { getAllStages } from '@lib/cms-api';
import { Stage } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';
import { StageNav } from '@components/Stage/StageNav';

const SkipNavContent: any = RSkipNavContent;

type Props = {
  stage: Stage;
  allStages: Stage[];
};

export default function MainStagePage({ stage }: Props) {
  const meta = {
    title: 'Stage | Storybook Day',
    description: META_DESCRIPTION
  };
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #171c23;
          }
        `}
      />
      <Page meta={meta}>
        <StageNav transparent activeRoute={'/stage/main'} />
        <SkipNavContent />
        <main>
          <StagePage stage={stage} />
        </main>
      </Page>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const stages = await getAllStages();
  const stage = stages.find((s: Stage) => s.slug === slug) || null;

  if (!stage) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      stage,
      allStages: stages
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stages = await getAllStages();
  const slugs = stages.map((s: Stage) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
