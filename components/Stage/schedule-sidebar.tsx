import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Stage } from '@lib/types';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
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

export default function ScheduleSidebar({ allStages }: Props) {
  const router = useRouter();
  const [currentStageSlug, setCurrentStageSlug] = useState(router.query.slug);
  const currentStage = allStages.find((s: Stage) => s.slug === currentStageSlug);

  useEffect(() => {
    setCurrentStageSlug(router.query.slug);
  }, [router.query.slug]);

  return (
    <ScheduleWrapper>
      {currentStage?.schedule.map(talk => (
        <TalkCard key={talk.title} talk={talk} />
      ))}
    </ScheduleWrapper>
  );
}
