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

import React from 'react';
import { css, styled } from '@storybook/theming';
import { useRouter } from 'next/router';
import { SkipNavContent as RSkipNavContent } from '@reach/skip-nav';
import { withPrefix } from '@lib/with-prefix';
import { Footer } from './Footer';
import { Nav } from './Nav';

const PageContainer = styled.div<{ full?: boolean }>`
  ${props =>
    props.full &&
    css`
      display: flex;
      flex-direction: column;
      background-image: url(${withPrefix('/gradient-backdrop.svg')});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;

const Main = styled.main<{ full?: boolean }>`
  ${props =>
    props.full &&
    css`
      flex: 1 1 auto;
      min-height: calc(100vh - 72px);
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

// Workaround for TS 2590 error
const SkipNavContent: any = RSkipNavContent;

type LayoutProps = {
  children: React.ReactNode;
  showFooter?: boolean;
  transparentNav?: boolean;
  hideFooterRegistration?: boolean;
  layoutStyle?: 'default' | 'full';
  navCTA?: React.ReactNode;
};

export function Layout({
  showFooter,
  children,
  layoutStyle = 'default',
  navCTA,
  transparentNav = false,
  hideFooterRegistration
}: LayoutProps) {
  const router = useRouter();
  const activeRoute = router.asPath;

  return (
    <PageContainer full={layoutStyle === 'full'}>
      <Nav
        transparent={transparentNav || layoutStyle === 'full'}
        CTA={navCTA}
        activeRoute={activeRoute}
      />
      <SkipNavContent />
      <Main full={layoutStyle === 'full'}>{children}</Main>
      {showFooter && <Footer showRegistrationForm={!hideFooterRegistration} />}
    </PageContainer>
  );
}
