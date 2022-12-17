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
  height: 100%;
  transform: scale(1.25);
  filter: blur(10px);
  user-select: none;
  pointer-events: none;
  border-radius: 20px;
`;
const Video = styled.video`
  position: relative;
  border-radius: 20px;
`;

interface VideoCardProps {
  src: string;
  bgColor: string;
  poster?: string;
  style?: React.CSSProperties;
}

export const VideoCard = ({ bgColor, src, poster, ...props }: VideoCardProps) => {
  return (
    <MediaWrapper bgColor={bgColor} {...props}>
      <BackdropVideo className="js-lazy-video" autoPlay loop playsInline muted>
        <source data-src={src} type="video/mp4" />
      </BackdropVideo>
      <Video className="js-lazy-video" autoPlay loop playsInline muted poster={poster}>
        <source data-src={src} type="video/mp4" />
      </Video>
    </MediaWrapper>
  );
};
