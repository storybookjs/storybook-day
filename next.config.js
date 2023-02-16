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

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    domains: [
      'www.datocms-assets.com',
      'a.storyblok.com',
      'images.ctfassets.net',
      'images.prismic.io',
      'cdn.aglty.io',
      'localhost' // For Strapi
    ],
    imageSizes: [24, 64, 300]
  },
  async redirects() {
    return [
      {
        source: '/speakers',
        destination: '/schedule',
        permanent: true
      }
    ];
  }
};
