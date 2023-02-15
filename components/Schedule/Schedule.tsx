import { useMemo } from 'react';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Stage, Talk } from '@lib/types';
import { TalkCard } from './TalkCard';

const { pageMargins, color, marketing, spacing, breakpoints } = styles;

const ScheduleWrapper = styled.div`
  ${pageMargins};
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Title = styled.h1`
  ${marketing.subheading};
  color: ${color.darkest};
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.hero2};
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${breakpoints[2]}px) {
    ${marketing.hero1};
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.div`
  ${marketing.textLargeBold};
  color: ${color.darkest};
  margin-bottom: 0.625rem;

  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.subheading};
  }
`;
const Section = styled.div`
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  margin-bottom: 2rem;
`;

type Props = {
  allStages: Stage[];
};

function groupBySection(talks: Talk[]) {
  return talks.reduce((acc, talk) => {
    const section = talk.section || 'Other';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(talk);
    return acc;
  }, {} as Record<string, Talk[]>);
}

export function Schedule({ allStages }: Props) {
  const mainStage = allStages[0];
  const sections = useMemo(() => groupBySection(mainStage.schedule), [mainStage.schedule]);

  return (
    <ScheduleWrapper>
      <Title>Schedule</Title>
      {/* Intro */}
      <Section>
        {sections.intro.map((talk: Talk) => (
          <TalkCard key={talk.title} talk={talk} />
        ))}
      </Section>
      <SectionTitle>Storybook 7.0</SectionTitle>
      <Section>
        {sections['storybook-7'].map((talk: Talk) => (
          <TalkCard key={talk.title} talk={talk} />
        ))}
      </Section>
      <SectionTitle>💼 Use cases</SectionTitle>
      <Section>
        {sections['use-cases'].map((talk: Talk) => (
          <TalkCard key={talk.title} talk={talk} />
        ))}
      </Section>
      <SectionTitle>🌐 Ecosystem</SectionTitle>
      <Section>
        {sections.ecosystem.map((talk: Talk) => (
          <TalkCard key={talk.title} talk={talk} />
        ))}
      </Section>
      {/* Wrap up */}
      <Section>
        {sections['wrap-up'].map((talk: Talk) => (
          <TalkCard key={talk.title} talk={talk} />
        ))}
      </Section>
    </ScheduleWrapper>
  );
}
