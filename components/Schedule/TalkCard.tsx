import { useState, useEffect } from 'react';
import { zonedTimeToUtc, format } from 'date-fns-tz';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Talk } from '@lib/types';
import { Speaker } from './Speaker';

const { color, text, typography, breakpoints } = styles;

const formatDate = (date: string) => {
  const laTime = zonedTimeToUtc(date, 'America/Los_Angeles');

  // https://github.com/date-fns/date-fns/issues/946
  return format(laTime, "h:mmaaaaa'm'");
};

const timeZone = (date: string) => {
  const laTime = zonedTimeToUtc(date, 'America/Los_Angeles');
  return format(laTime, 'zzz');
};

const TalkWrapper = styled.div<{ inverse?: boolean }>`
  background-color: ${props => (props.inverse ? color.midnight : color.lightest)};
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

const Time = styled.div<{ inverse?: boolean }>`
  ${text.regularBold};
  position: sticky;
  top: 0;
  flex: 1;
  color: ${props => (props.inverse ? color.medium : color.dark)};
  padding: 10px 20px;
  border-bottom: 1px solid ${props => (props.inverse ? 'rgba(255, 255, 255, 0.0)' : color.border)};
  background: ${props => (props.inverse ? color.darkest : color.lighter)};

  @media (min-width: ${breakpoints[1]}px) {
    flex: none;
  }
`;

const Info = styled.div<{ inverse?: boolean }>`
  border-bottom: 1px solid ${props => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.border)};
  padding-bottom: 1rem;
`;
const Title = styled.div<{ inverse?: boolean }>`
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.m1}px;
  line-height: 24px;
  color: ${props => (props.inverse ? color.lightest : color.darkest)};
  margin-bottom: 10px;
`;
const Description = styled.div<{ inverse?: boolean }>`
  font-size: ${typography.size.s3}px;
  line-height: 24px;
  color: ${props => (props.inverse ? color.lightest : color.darkest)};
`;

const Speakers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

type TalkCardProps = {
  key: string;
  talk: Talk;
  inverse?: boolean;
};

export function TalkCard({
  talk: { title, description, speaker: speakers, start, end },
  inverse
}: TalkCardProps) {
  const [startAndEndTime, setStartAndEndTime] = useState('');

  useEffect(() => {
    setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)} (${timeZone(end)})`);
  }, [end, start]);

  return (
    <TalkWrapper inverse={inverse}>
      <Time inverse={inverse}>{startAndEndTime || <>&nbsp;</>}</Time>
      <Inner>
        <Info inverse={inverse}>
          <Title inverse={inverse}>{title}</Title>
          <Description inverse={inverse}>{description}</Description>
        </Info>
        <Speakers>
          {speakers.map(speaker => (
            <Speaker
              inverse={inverse}
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
