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

import { NextApiRequest, NextApiResponse } from 'next';
import { SAMPLE_TICKET_NUMBER } from '@lib/constants';
import { getUserByUsername } from '@lib/db-api';
import { ImageResponse } from '@vercel/og';
import { TicketOGImage } from '@components/Ticket/TicketOGImage';

export const config = {
  runtime: 'experimental-edge'
};

export default function ticketImages(req: any, res: NextApiResponse) {
  return new ImageResponse(
    <TicketOGImage ticketNumber={2} username="winkerVSbecks" name="Varun Vachhar" />,
    {
      width: 1200 * 2,
      height: 627 * 2
    }
  );

  // let name: string | null | undefined;
  // let ticketNumber: number | null | undefined = SAMPLE_TICKET_NUMBER;

  // // const url = new URL(req.nextUrl as string);
  // const { username } = req.query || {};

  // if (username) {
  //   const usernameString = username.toString();
  //   const user = await getUserByUsername(usernameString);
  //   name = user.name;
  //   ticketNumber = user.ticketNumber || SAMPLE_TICKET_NUMBER;

  //   return new ImageResponse(
  //     <TicketOGImage ticketNumber={ticketNumber} username={usernameString} name={name} />,
  //     {
  //       width: 1200 * 2,
  //       height: 627 * 2,
  //       headers: {
  //         'Content-Type': `image/png`,
  //         'Cache-Control': `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  //       }
  //     }
  //   );
  // } else {
  //   return new Response('Not Found', {
  //     status: 404
  //   });
  // }
}
