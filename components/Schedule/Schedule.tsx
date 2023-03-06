import { useMemo } from 'react';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Stage, Talk } from '@lib/types';
import { TalkCard } from './TalkCard';

const { pageMargins, typography, color, marketing, spacing, breakpoints } = styles;

const ScheduleWrapper = styled.div`
  ${pageMargins};
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
const Container = styled.div`
  max-width: 660px;
  margin: 0 auto;
`;

const Title = styled.h1<{ inverse?: boolean }>`
  ${marketing.subheading};
  color: ${props => (props.inverse ? color.lightest : color.darkest)};
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

const SectionTitle = styled.div<{ inverse?: boolean }>`
  ${marketing.textLargeBold};
  color: ${props => (props.inverse ? color.lightest : color.darkest)};
  margin-bottom: 0.625rem;

  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.subheading};
  }
`;
const Section = styled.div<{ inverse?: boolean }>`
  border: 1px solid ${props => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.border)};
  border-radius: ${spacing.borderRadius.small}px;
  contain: paint;
  margin-bottom: 2rem;
`;

const Break = styled.div<{ inverse?: boolean }>`
  border: 1px solid ${props => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.border)};
  border-radius: ${spacing.borderRadius.small}px;
  background: ${props => (props.inverse ? color.darkest : color.lighter)};
  margin-bottom: 2rem;
  padding: 1rem;

  ${marketing.textLargeBold};
  color: ${props => (props.inverse ? color.lightest : color.darkest)};

  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.subheading};
  }
`;

const Note = styled.div<{ inverse?: boolean }>`
  font-size: ${typography.size.s3}px;
  line-height: 24px;
  color: ${props => (props.inverse ? color.lightest : color.darkest)};
  margin-bottom: 0.5rem;
`;

type Props = {
  allStages: Stage[];
  inverse?: boolean;
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

export function Schedule({ inverse, allStages }: Props) {
  const mainStage = allStages[0];
  const sections = useMemo(() => groupBySection(mainStage.schedule), [mainStage.schedule]);

  return (
    <ScheduleWrapper>
      <Container>
        <Title inverse={inverse} id="schedule">
          Schedule
        </Title>
        <Note inverse={inverse}>Times below are shown in your local browser's time zone</Note>
        {/* Intro */}
        <Section inverse={inverse}>
          {sections.intro.map((talk: Talk) => (
            <TalkCard inverse={inverse} key={talk.title} talk={talk} />
          ))}
        </Section>
        <SectionTitle inverse={inverse}>Storybook 7.0</SectionTitle>
        <Section inverse={inverse}>
          {sections['storybook-7'].map((talk: Talk) => (
            <TalkCard inverse={inverse} key={talk.title} talk={talk} />
          ))}
        </Section>
        <Break inverse={inverse}>🥪 Break</Break>
        <SectionTitle inverse={inverse}>🌐 Ecosystem</SectionTitle>
        <Section inverse={inverse}>
          {sections.ecosystem.map((talk: Talk) => (
            <TalkCard inverse={inverse} key={talk.title} talk={talk} />
          ))}
        </Section>
        <SectionTitle inverse={inverse}>💼 Use cases</SectionTitle>
        <Section inverse={inverse}>
          {sections['use-cases'].map((talk: Talk) => (
            <TalkCard inverse={inverse} key={talk.title} talk={talk} />
          ))}
        </Section>
        {/* Wrap up */}
        <Section inverse={inverse}>
          {sections['wrap-up'].map((talk: Talk) => (
            <TalkCard inverse={inverse} key={talk.title} talk={talk} />
          ))}
        </Section>
      </Container>
    </ScheduleWrapper>
  );
}
