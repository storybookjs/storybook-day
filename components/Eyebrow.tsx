import React from 'react';
import { styled } from '@storybook/theming';
import { Link } from '@storybook/design-system';
import { styles } from '@storybook/components-marketing';

const { text, color, spacing, breakpoints } = styles;

const EyebrowLink = styled(Link)<{ inverse?: boolean }>`
  ${text.storybookMedium}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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
`;

interface EyebrowProps {
  inverse?: boolean;
}

export const Eyebrow = ({ inverse }: EyebrowProps) => (
  <EyebrowContainer inverse={inverse}>
    <EyebrowLink
      inverse={inverse}
      secondary={!inverse}
      href="https://github.com/storybookjs/storybook/releases"
      withArrow
    >
      Storybook 7 is now in RC. Full release coming soon!
    </EyebrowLink>
  </EyebrowContainer>
);
