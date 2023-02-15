import { useRouter } from 'next/router';

import Page from '@components/page';
import { ConfContent } from '@components/index';
import { META_DESCRIPTION } from '@lib/constants';

export default function Conf() {
  const { query } = useRouter();
  const meta = {
    title: 'Storybook Day',
    description: META_DESCRIPTION
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString()
  };

  return (
    <Page meta={meta}>
      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
      />
    </Page>
  );
}
