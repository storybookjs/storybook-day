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

import { useRouter } from 'next/router';
import Head from 'next/head';
import { TicketVisual } from './TicketVisual';
import styles from './ticket-image.module.css';

export const TicketImage = () => {
  const { query } = useRouter();
  if (query.ticketNumber) {
    return (
      <div className={styles.background}>
        <div className={styles.page}>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap"
              rel="stylesheet"
            />
          </Head>
          <TicketVisual
            style={{ transform: 'scale(2.4)' }}
            username={query.username ? query.username.toString() : undefined}
            ticketNumber={parseInt(query.ticketNumber.toString(), 10)}
            name={
              query.name
                ? query.name?.toString()
                : query.username
                ? query.username.toString()
                : undefined
            }
          />
        </div>
      </div>
    );
  }
  return <></>;
};
