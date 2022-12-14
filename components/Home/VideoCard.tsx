import React from 'react';
import { styled } from '@storybook/theming';

const MediaWrapper = styled.div<{ bgColor: string }>`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
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

interface VideoCardProps {
  src: string;
  bgColor: string;
}

export const VideoCard = ({ bgColor, src, ...props }: VideoCardProps) => {
  return (
    <MediaWrapper bgColor={bgColor} {...props}>
      <BackdropVideo src={src} playsInline />
      <Video
        src={src}
        autoPlay
        loop
        playsInline
        muted
        // poster={activeFeature.poster}
      />
    </MediaWrapper>
  );
};
