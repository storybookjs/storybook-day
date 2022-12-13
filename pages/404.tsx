import Head from 'next/head';
import type { GetStaticProps, NextPage } from 'next';
import { NotFoundScreen } from '@storybook/components-marketing';
import { styled } from '@storybook/theming';
import Page from '@components/page';
import { Layout } from '@components/Layout';
import { META_DESCRIPTION } from '@lib/constants';
import { getDxData } from '@lib/get-dx-data';

type Props = { latestVersion: string };

const GradientBackdrop = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: linear-gradient(180deg, var(--bg-blue) 0%, rgba(246, 249, 252, 0) 75%);
`;

const NotFound: NextPage<Props> = ({ latestVersion }) => {
  return (
    <Page meta={{ title: 'Storybook Day | Stickers', description: META_DESCRIPTION }}>
      <Head>
        <title>Component Encyclopedia | Storybook</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Layout hideNavCTA showFooter hideFooterRegistration>
        <GradientBackdrop>
          <NotFoundScreen
            apiKey={process.env.ALGOLIA_API_KEY as string}
            includeSpacing={false}
            latestVersionString={latestVersion}
            repoUrl="https://github.com/storybookjs/storybook/issues"
          />
        </GradientBackdrop>
      </Layout>
    </Page>
  );
};

export default NotFound;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      ...(await getDxData())
    }
  };
};
