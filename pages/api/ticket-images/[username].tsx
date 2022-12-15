import { NextApiRequest, NextApiResponse } from 'next';
import { SAMPLE_TICKET_NUMBER } from '@lib/constants';
import { getUserByUsername } from '@lib/db-api';

/**
 * This function queries another edge function which in turn generates the image.
 *
 * Why?
 * chrome-aws-lambda is too big and can't be deployed on Netlify anymore.
 * We tried switching to @vercel/og, but that doesn't work on Netlify either.
 * However, https://github.com/ascorbic/og-edge is a modified version that
 * uses Deno and works on Netlify. Therefore, I deployed that as a separate service
 * and recreated the image with inline styles (a requirement).
 */
export default async function ticketImages(req: NextApiRequest, res: NextApiResponse) {
  let name: string | null | undefined;
  let ticketNumber: number | null | undefined = SAMPLE_TICKET_NUMBER;

  const { username } = req.query || {};

  if (username) {
    const usernameString = username.toString();
    const user = await getUserByUsername(usernameString);
    name = user.name || usernameString;
    ticketNumber = user.ticketNumber || SAMPLE_TICKET_NUMBER;

    const URL = `https://sb-ticket-image.netlify.app/og?name=${encodeURI(
      name
    )}&ticketNumber=${ticketNumber}&username=${encodeURI(usernameString)}`;

    const image = await fetch(URL);
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
