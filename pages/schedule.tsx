import { GetStaticProps } from 'next';
import Page from '@components/page';
import { Schedule } from '@components/Schedule';
import { Layout } from '@components/Layout';
import { getAllStages } from '@lib/cms-api';
import { Stage } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';
import { Button } from '@storybook/design-system';
import { LinkWrapper } from '@components/LinkWrapper';

type Props = {
  allStages: Stage[];
};

export default function SchedulePage({ allStages }: Props) {
  const meta = {
    title: 'Schedule | Storybook Day',
    description: META_DESCRIPTION
  };

  return (
    <>
      <Page meta={meta} theme="yellow">
        <Layout
          showFooter
          navCTA={
            <Button
              size="small"
              appearance="secondary"
              isLink
              ButtonWrapper={LinkWrapper}
              href="/#register"
            >
              Get your free ticket
            </Button>
          }
        >
          <Schedule allStages={allStages} />
        </Layout>
      </Page>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allStages = await getAllStages();

  return {
    props: {
      allStages
    },
    revalidate: 60
  };
};
