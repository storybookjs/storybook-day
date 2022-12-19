import { useRouter } from 'next/router';
import Head from 'next/head';
import { Button } from '@storybook/design-system';
import Page from '@components/page';
import { META_DESCRIPTION } from '@lib/constants';
import { Stickers } from '@components/Stickers';
import { Layout } from '@components/Layout';
import { LinkWrapper } from '@components/LinkWrapper';

export default function Conf() {
  const { query } = useRouter();
  const username = query.username?.toString();
  const name = query.name?.toString();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Page
        meta={{ title: 'Storybook Day | Stickers', description: META_DESCRIPTION }}
        theme="yellow"
      >
        <Layout
          showFooter={false}
          layoutStyle="full"
          navCTA={
            <Button
              size="small"
              appearance="inverseSecondary"
              isLink
              ButtonWrapper={LinkWrapper}
              href={`/tickets/${username}`}
            >
              View your ticket
            </Button>
          }
        >
          <Stickers username={username} name={name} />
        </Layout>
      </Page>
    </>
  );
}
