import React from 'react';
import { styled } from '@storybook/theming';
import { Badge, Link } from '@storybook/design-system';
import { styles } from '@storybook/components-marketing';
import { CHROMATIC_URL } from '@lib/constants';

const { text, color, spacing, breakpoints } = styles;

const EyebrowLink = styled(Link)<{ inverse?: boolean }>`
  ${text.storybookMedium}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: auto;

  && {
    ${props => ({
      color: props.inverse ? color.lightest : color.darker
    })}
  }
`;

const EyebrowContainer = styled.div<{
  inverse?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  background-color: ${props => (props.inverse ? 'rgba(0, 0, 0, 0.3)' : color.blueLight)};
  box-shadow: ${props => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.tr10)} 0 -1px 0px 0px inset;

  ${Badge} {
    margin-right: ${spacing.padding.small}px;
  }
`;

const EyebrowCallout = styled.a<{ inverse?: boolean }>`
  ${text.storybookMedium}
  transition: transform 150ms ease-out;
  text-decoration: none;
  &:hover,
  &:focus-visible {
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
  ${props => ({ color: props.inverse ? color.medium : color.dark })}

  display: none;

  @media (min-width: ${breakpoints[1] * 1.25}px) {
    display: block;
  }
`;

interface EyebrowProps {
  inverse?: boolean;
}

export const Eyebrow = ({ inverse }: EyebrowProps) => (
  <EyebrowContainer inverse={inverse}>
    <Badge status="positive">RC</Badge>
    <EyebrowLink
      inverse={inverse}
      secondary={!inverse}
      href="https://storybook.js.org/docs/7.0/"
      withArrow
    >
      Storybook 7 is now a release candidate. Try it today
    </EyebrowLink>
    <EyebrowCallout inverse={inverse} href={CHROMATIC_URL}>
      🎁 Claim $500 credit to Chromatic with code <code style={{ color: 'inherit' }}>DAY</code>
    </EyebrowCallout>
  </EyebrowContainer>
);
