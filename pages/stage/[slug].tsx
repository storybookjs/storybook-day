/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { GetStaticProps, GetStaticPaths } from 'next';
import { Global, css } from '@storybook/theming';
import Page from '@components/page';
import { StageContainer } from '@components/Stage';
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

export default function StagePage({ stage, allStages }: Props) {
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
          <StageContainer stage={stage} allStages={allStages} />
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
