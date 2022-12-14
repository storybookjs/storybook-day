import React from 'react';
import { styled } from '@storybook/theming';
import { Button } from '@storybook/design-system';
import { ByChromatic } from '@components/ByChromatic';
import { LinkWrapper } from '@components/LinkWrapper';
import {
  TWITTER_URL,
  DISCORD_URL,
  YOUTUBE_URL,
  GITHUB_URL,
  DATE,
  SHORT_TIME,
  LEGAL_URL,
  CODE_OF_CONDUCT,
  MINI_TIMEZONE
} from '@lib/constants';
import {
  Title,
  FooterWrapper,
  LayoutWrapper,
  Column,
  FooterLink,
  ColumnsWrapper,
  Register,
  FooterText
} from './Footer.styles';

const Attribution = styled(ByChromatic)`
  margin-top: 24px;
`;

export const Footer = ({ showRegistrationForm = true }: { showRegistrationForm?: boolean }) => {
  return (
    <FooterWrapper>
      <LayoutWrapper>
        <Register>
          {showRegistrationForm && (
            <>
              <Title>Register</Title>
              <Button appearance="secondary" isLink ButtonWrapper={LinkWrapper} href="#register">
                Get your free ticket
              </Button>
            </>
          )}
          <Attribution />
        </Register>

        <ColumnsWrapper>
          <Column>
            <Title>Event details</Title>
            <FooterText>{DATE}</FooterText>
            <FooterText>
              {SHORT_TIME} {MINI_TIMEZONE}
            </FooterText>
            <FooterLink tertiary href={LEGAL_URL}>
              Privacy policy
            </FooterLink>
            <FooterLink tertiary href={CODE_OF_CONDUCT}>
              Code of conduct
            </FooterLink>
          </Column>
          <Column>
            <Title>Get involved</Title>
            <FooterLink tertiary href={TWITTER_URL}>
              Twitter
            </FooterLink>
            <FooterLink tertiary href={DISCORD_URL}>
              Discord chat
            </FooterLink>
            <FooterLink tertiary href={YOUTUBE_URL}>
              YouTube
            </FooterLink>
            <FooterLink tertiary href={GITHUB_URL}>
              GitHub
            </FooterLink>
          </Column>
        </ColumnsWrapper>
      </LayoutWrapper>
    </FooterWrapper>
  );
};
