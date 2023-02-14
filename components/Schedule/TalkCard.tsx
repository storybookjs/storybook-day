import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Talk } from '@lib/types';
import { Avatar } from '@storybook/design-system';
import { Speaker } from './Speaker';

const { color, spacing, text, typography, breakpoints } = styles;

const formatDate = (date: string) => {
  // https://github.com/date-fns/date-fns/issues/946
  return format(parseISO(date), "h:mmaaaaa'm'");
};

const TalkWrapper = styled.div`
  background-color: ${color.lightest};
  text-align: left;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${color.border};
  }
`;
const Inner = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Time = styled.div`
  ${text.regularBold};
  flex: 1;
  color: ${color.dark};
  padding: 10px 20px;
  border-bottom: 1px solid ${color.border};
  background: ${color.lighter};
  border-top-left-radius: ${spacing.borderRadius.small}px;
  border-top-right-radius: ${spacing.borderRadius.small}px;

  @media (min-width: ${breakpoints[1]}px) {
    flex: none;
  }
`;

const Info = styled.div`
  border-bottom: 1px solid ${color.border};
  padding-bottom: 1rem;
`;
const Title = styled.div`
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m1}px;
  line-height: 24px;
  color: color.darkest;
  margin-bottom: 10px;
`;
const Description = styled.div`
  font-size: ${typography.size.s3}px;
  line-height: 24px;
  color: ${color.darkest};
`;

const Speakers = styled.div`
  display: flex;
  gap: 1rem;
`;

type TalkCardProps = {
  key: string;
  talk: Talk;
};

export function TalkCard({
  talk: { title, description, speaker: speakers, start, end }
}: TalkCardProps) {
  const [startAndEndTime, setStartAndEndTime] = useState('');

  useEffect(() => {
    setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
  }, [end, start]);

  const firstSpeakerLink = `/speakers/${speakers[0].slug}`;

  return (
    <TalkWrapper>
      <Time>{startAndEndTime || <>&nbsp;</>}</Time>
      <Inner>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
        <Speakers>
          {speakers.map(speaker => (
            <Speaker
              key={speaker.name}
              slug={speaker.slug}
              name={speaker.name}
              title={speaker.title}
              company={speaker.company}
              avatarUrl={speaker.image.url}
            />
          ))}
        </Speakers>
      </Inner>
    </TalkWrapper>
  );
}
