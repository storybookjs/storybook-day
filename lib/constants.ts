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
const isDeployPreview = process.env.CONTEXT === 'deploy-preview';

export const SITE_URL = isDeployPreview
  ? `${process.env.DEPLOY_PRIME_URL}/day`
  : 'https://storybook.js.org/day';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'storybookjs';
export const BRAND_NAME = 'Storybook';
export const SITE_NAME_MULTILINE = ['Storybook Day', 'March 14, 2023'];
export const SITE_NAME = 'Storybook Day';
export const META_TITLE = ' Storybook Day user conference';
export const META_DESCRIPTION =
  'A free online conference about the future of UI development with Storybook. See what’s new in 7.0 and meet world-class frontend devs.';
export const SITE_DESCRIPTION =
  'An interactive online experience by the community, free for everyone.';
export const DATE = 'March 14, 2023';
export const SHORT_DATE = 'Mar 14, 2023';
export const LONG_DATE = 'Mar 14 10:00am - 12:00pm PST';
export const SHORT_TIME = '10am - 12pm';
export const TIMEZONE = 'Pacific Standard Time';
export const SHORT_TIMEZONE = 'Pacific Time';
export const MINI_TIMEZONE = 'PST';
export const FULL_DATE = 'March 14th 10am Pacific Time (GMT-8)';
export const TWEET_TEXT = `I'm going to Storybook Day on ${DATE}.
Excited to see what's new in 7.0.

Join me there, the tickets are free 👉`;
export const COOKIE = 'user-id';

export const CHROMATIC_URL =
  'https://www.chromatic.com/?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook_day';
export const LEGAL_URL = 'https://www.chromatic.com/docs/privacy-policy';
export const CODE_OF_CONDUCT =
  'https://github.com/storybookjs/storybook/blob/next/CODE_OF_CONDUCT.md';
export const REPO = 'https://github.com/storybookjs/storybook-day';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Live Stage',
    route: '/stage/a'
  },
  {
    name: 'Vercel Stage',
    route: '/stage/c'
  },
  {
    name: '100ms Stage',
    route: '/stage/m'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Expo',
    route: '/expo'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';

export const TWITTER_URL = 'https://twitter.com/storybookjs';
export const DISCORD_URL = 'https://discord.gg/storybook';
export const YOUTUBE_URL = 'https://www.youtube.com/c/StorybookJS';
export const GITHUB_URL = 'https://github.com/storybookjs';
export const SNEAK_PEEK_URL = '/#sneak-peek';

// https://www.labnol.org/calendar/
export const CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230301T180000Z%2F20230301T200000Z&details=An%20online%20event%20about%20the%20future%20of%20UI%20development%20with%20Storybook.%20See%20what%E2%80%99s%20new%20in%207.0%2C%20meet%20world-class%20frontend%20devs%2C%20and%20check%20out%20the%20leading%20projects%20in%20the%20community.&location=https%3A%2F%2Fstorybook.js.org%2Fday&text=Storybook%20Day';

//  <a download=""
export const ICS =
  'data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20230301T180000Z%0ADTEND:20230301T200000Z%0ASUMMARY:Storybook%20Day%0ADESCRIPTION:An%20online%20event%20about%20the%20future%20of%20UI%20development%20with%20Storybook.%20See%20what%E2%80%99s%20new%20in%207.0%2C%20meet%20world-class%20frontend%20devs%2C%20and%20check%20out%20the%20leading%20projects%20in%20the%20community.%0ALOCATION:https%3A%2F%2Fstorybook.js.org%2Fday%0AEND:VEVENT%0AEND:VCALENDAR%0A';
