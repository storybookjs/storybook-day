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

import { useState } from 'react';
import { PageState, ConfDataContext, UserData } from '@lib/hooks/use-conf-data';
import { Button } from '@storybook/design-system';
import { Ticket } from './Ticket';
import { Layout } from './Layout';
import { HomePage } from './Home';
import { LinkWrapper } from './LinkWrapper';

type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
  defaultPageState?: PageState;
  showFooter?: boolean;
};

function CTA({
  username,
  registered,
  sharePage
}: {
  username?: string;
  registered?: boolean;
  sharePage?: boolean;
}) {
  if (sharePage) {
    return null;
  }

  if (username) {
    return (
      <Button
        size="small"
        appearance="inverseSecondary"
        isLink
        ButtonWrapper={LinkWrapper}
        href={`/tickets/${username}`}
      >
        View your ticket
      </Button>
    );
  }

  if (!registered) {
    return (
      <Button
        size="small"
        appearance="secondary"
        isLink
        ButtonWrapper={LinkWrapper}
        href="/#register"
      >
        Get your free ticket
      </Button>
    );
  }
}

export function ConfContent({
  defaultUserData,
  sharePage,
  defaultPageState = 'registration',
  showFooter
}: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>(defaultPageState);
  const notRegistered = pageState === 'registration' && !sharePage;
  console.log({ sharePage });

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState
      }}
    >
      <Layout
        showFooter={showFooter ? showFooter : notRegistered ? true : false}
        layoutStyle={notRegistered ? 'default' : 'full'}
        navCTA={
          <CTA
            username={userData.username}
            registered={userData.ticketNumber}
            sharePage={sharePage}
          />
        }
      >
        {notRegistered ? (
          <HomePage />
        ) : (
          <Ticket
            username={userData.username}
            name={userData.name}
            ticketNumber={userData.ticketNumber}
            sharePage={sharePage}
          />
        )}
      </Layout>
    </ConfDataContext.Provider>
  );
}
