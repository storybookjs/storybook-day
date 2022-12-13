import { useRouter } from 'next/router';
import Head from 'next/head';
import Page from '@components/page';
import { META_DESCRIPTION } from '@lib/constants';
import { Stickers } from '@components/Stickers';
import { Layout } from '@components/Layout';

export default function Conf() {
  const { query } = useRouter();
  const username = query.username?.toString();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Page meta={{ title: 'Storybook Day | Stickers', description: META_DESCRIPTION }}>
        <Layout showFooter={false} layoutStyle="full" hideNavCTA>
          <Stickers username={username} />
        </Layout>
      </Page>
    </>
  );
}
