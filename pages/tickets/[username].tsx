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
import Error from 'next/error';
import Head from 'next/head';
import { SkipNavContent as RSkipNavContent } from '@reach/skip-nav';
import { getUserByUsername } from '@lib/db-api';

import Page from '@components/page';
import ConfContent from '@components/index';
import { SITE_URL, SITE_NAME, META_DESCRIPTION, SAMPLE_TICKET_NUMBER } from '@lib/constants';

type Props = {
  username: string | null;
  usernameFromParams: string | null;
  name: string | null;
  ticketNumber: number | null;
};

// Workaround for TS 2590 error
const SkipNavContent: any = RSkipNavContent;

export default function TicketShare({ username, ticketNumber, name, usernameFromParams }: Props) {
  if (!ticketNumber) {
    return <Error statusCode={404} />;
  }

  const meta = username
    ? {
        title: `${name}’s ${SITE_NAME} Ticket`,
        description: META_DESCRIPTION,
        image: `/api/ticket-images/${username}`,
        url: `${SITE_URL}/tickets/${username}`
      }
    : {
        title: 'Ticket Demo - Virtual Event Starter Kit',
        description: META_DESCRIPTION,
        image: `/api/ticket-images/${usernameFromParams}`,
        url: `${SITE_URL}/tickets/${usernameFromParams}`
      };

  return (
    <Page meta={meta}>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <SkipNavContent />
      <ConfContent
        defaultUserData={{
          username: username || undefined,
          name: name || '',
          ticketNumber
        }}
        sharePage
      />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const username = params?.username?.toString() || null;
  let name: string | null | undefined;
  let ticketNumber: number | null | undefined;

  if (username) {
    const user = await getUserByUsername(username);
    name = user.name ?? user.username;
    ticketNumber = user.ticketNumber;
  }
  return {
    props: {
      username: ticketNumber ? username : null,
      usernameFromParams: username || null,
      name: ticketNumber ? name || username || null : null,
      ticketNumber: ticketNumber || SAMPLE_TICKET_NUMBER
    },
    revalidate: 5
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: 'blocking'
  });
};
