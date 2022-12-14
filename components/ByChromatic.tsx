import React from 'react';
import { css, styled } from '@storybook/theming';
import { Logos } from '@storybook/design-system';
import { styles } from '@storybook/components-marketing';
import { CHROMATIC_URL } from '@lib/constants';

const { color, marketing } = styles;

const Label = styled.div<{ monochrome?: boolean }>`
  ${marketing.textSmall};
  color: ${props => (props.monochrome ? color.darkest : color.dark)};
`;

const ChromaticLogo = styled(Logos.Chromatic, {
  shouldForwardProp: prop => prop !== 'monochrome'
})<{ monochrome?: boolean }>`
  height: 20px;
  margin-left: 6px;

  ${props =>
    props.monochrome &&
    css`
      circle {
        fill: ${color.darkest};
      }
    `}
`;

const Wrapper = styled.a<{ monochrome?: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;

  ${props =>
    props.monochrome &&
    css`
      opacity: 0.9;
    `}
`;

interface ByChromaticProps {
  monochrome?: boolean;
}

export const ByChromatic = ({ monochrome, ...props }: ByChromaticProps) => (
  <Wrapper
    monochrome={monochrome}
    {...props}
    href={CHROMATIC_URL}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Label monochrome={monochrome}>Brought to you by</Label>
    <ChromaticLogo monochrome={monochrome} />
  </Wrapper>
);
