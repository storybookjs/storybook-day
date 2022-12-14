import React from 'react';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';

const { spacing, color, breakpoints, typography, pageMargins, pageMargin } = styles;

const FeatureMedia = styled.div<{ bgColor: string }>`
  border-radius: ${spacing.borderRadius.default}px;
  position: relative;
  overflow: hidden;
  background-color: ${props => props.bgColor};

  video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  a {
    background-color: rgba(0 0 0 / 50%);
    position: absolute;
    top: 20px;
    right: 20px;

    &:hover,
    &:focus,
    &:active {
      background-color: rgba(0 0 0 / 50%);
    }

    svg {
      margin: 0;
    }
  }
`;

const FeatureMediaLarge = styled(FeatureMedia)`
  height: 100%;
  overflow: hidden;

  margin-left: 0;
  margin-right: 0;
  border-radius: ${spacing.borderRadius.default}px;
`;

const BackdropVideo = styled.video`
  position: absolute;
  top: 0;
  width: 100%;
  transform: scale(1.25);
  filter: blur(10px);
  user-select: none;
  pointer-events: none;
`;
const Video = styled.video`
  position: relative;
`;

interface IllustratedFeatureListProps {
  src: string;
  bgColor: string;
}

export const VideoCard = ({ bgColor, src, ...props }: IllustratedFeatureListProps) => {
  return (
    <FeatureMediaLarge bgColor={bgColor} {...props}>
      <BackdropVideo src={src} playsInline />
      <Video
        src={src}
        autoPlay
        loop
        playsInline
        muted
        // poster={activeFeature.poster}
      />
    </FeatureMediaLarge>
  );
};
