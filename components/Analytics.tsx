import * as React from 'react';
import Script from 'next/script';

const oldTrackingId = process.env.NEXT_PUBLIC_GA3_TRACKING_ID;
const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const Analytics = () =>
  trackingId ? (
    // See: https://nextjs.org/docs/messages/next-script-for-ga
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${oldTrackingId}');
          gtag('config', '${trackingId}');
          gtag('set', 'content_group', 'storybook_day_2023');
        `}
      </Script>
    </>
  ) : null;

type TrackCustomEvent = (options: { name: string; data: Record<string, string | number> }) => void;

export const trackCustomEvent: TrackCustomEvent = ({ name, data }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, data);
  }
};
