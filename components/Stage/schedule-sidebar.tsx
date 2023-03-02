import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { isBefore, isAfter, differenceInMinutes } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { Stage, Talk } from '@lib/types';
import { TalkCard } from '../Schedule/TalkCard';

const { color, marketing, spacing, breakpoints } = styles;

type Props = {
  allStages: Stage[];
};

const ScheduleWrapper = styled.div`
  max-width: 660px;
  margin: 0 auto;
  height: 40vh;
  overflow: scroll;
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  contain: paint;
`;

// const [isTalkLive, setIsTalkLive] = useState(false);
// const [startAndEndTime, setStartAndEndTime] = useState('');

// useEffect(() => {
//   const now = Date.now();
//   setIsTalkLive(isAfter(now, parseISO(start)) && isBefore(now, parseISO(end)));
//   setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
// }, [end, start]);

export default function ScheduleSidebar({ allStages }: Props) {
  const router = useRouter();
  const [currentStageSlug, setCurrentStageSlug] = useState(router.query.slug);
  const currentStage = allStages.find((s: Stage) => s.slug === currentStageSlug);

  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    setCurrentStageSlug(router.query.slug);
  }, [router.query.slug]);

  useEffect(() => {
    const now = new Date('March 14 2023 14:21:00');
    console.log(now);

    // const now = Date.now();
    const activeTalk =
      currentStage?.schedule.find(talk => {
        const start = zonedTimeToUtc(talk.start, 'America/Los_Angeles');
        const end = zonedTimeToUtc(talk.end, 'America/Los_Angeles');

        return isAfter(now, start) && isBefore(now, end);
      }) || currentStage?.schedule[0];

    console.log(activeTalk);

    // setIsTalkLive(isAfter(now, parseISO(start)) && isBefore(now, parseISO(end)));
  }, [currentStage]);

  return (
    <ScheduleWrapper>
      {currentStage?.schedule.map((talk: Talk) => (
        <TalkCard
          ref={el => {
            itemsRef.current[talk.title] = el;
          }}
          key={talk.title}
          talk={talk}
        />
      ))}
    </ScheduleWrapper>
  );
}
