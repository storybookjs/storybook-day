import { NextApiRequest, NextApiResponse } from 'next';
import { SAMPLE_TICKET_NUMBER } from '@lib/constants';
import { getUserByUsername } from '@lib/db-api';
import { SHORT_DATE, SHORT_TIME, SHORT_TIMEZONE, SITE_URL } from '@lib/constants';

// https://deploy-preview-7--storybook-day-2023.netlify.app/day/api/ticket-images/winkerVSbecks

export default async function ticketImages(req: NextApiRequest, res: NextApiResponse) {
  let name: string | null | undefined;
  let ticketNumber: number | null | undefined = SAMPLE_TICKET_NUMBER;

  const { username } = req.query || {};

  if (username) {
    const usernameString = username.toString();
    const user = await getUserByUsername(usernameString);
    name = user.name;
    ticketNumber = user.ticketNumber || SAMPLE_TICKET_NUMBER;

    const numDigits = `${ticketNumber}`.length;
    const prefix = `000000`.slice(numDigits);
    const formattedTickerNumber = `#${prefix}${ticketNumber}`;

    console.log({
      name,
      formattedTickerNumber,
      username: usernameString
    });

    const image = await fetch('https://sb-ticket-image.netlify.app/og');
    const imageBuffer = Buffer.from(await image.arrayBuffer());

    res.setHeader('Content-Type', `image/png`);
    res.setHeader(
      'Cache-Control',
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.statusCode = 200;
    res.end(imageBuffer);
  } else {
    return new Response('Not Found', {
      status: 404
    });
  }
}
