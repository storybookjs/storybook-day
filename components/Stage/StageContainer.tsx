import useSWR from 'swr';
import dynamic from 'next/dynamic';
import { Stage } from '@lib/types';
import { withPrefix } from '@lib/with-prefix';
import { styled } from '@storybook/theming';
import { AspectRatio, styles } from '@storybook/components-marketing';
import ScheduleSidebar from './schedule-sidebar';

export const DiscordEmbed = dynamic(() => import('@widgetbot/react-embed'), {
  ssr: false
});

const { color, pageMargins, spacing, breakpoints } = styles;

type StageContainerProps = {
  stage: Stage;
  allStages: Stage[];
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.padding.medium}px;
  padding: 0 ${spacing.padding.medium}px;
  margin-top: ${spacing.padding.medium}px;
  margin-bottom: ${spacing.padding.medium}px;

  @media (min-width: ${breakpoints[2]}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${breakpoints[3]}px) {
    grid-template-columns: 2fr 1fr;
  }
`;
const Video = styled(AspectRatio)`
  border-radius: 7px;
`;

const Schedule = styled.div`
  ${pageMargins};
`;

export function StageContainer({ stage, allStages }: StageContainerProps) {
  const response = useSWR(withPrefix('/api/stages'), {
    initialData: allStages,
    refreshInterval: 5000
  });
  const updatedStages = response.data || [];
  const updatedStage = updatedStages.find((s: Stage) => s.slug === stage.slug) || stage;

  return (
    <div>
      <Container>
        <Video ratio={`${16}/${9}`}>
          <iframe
            allow="autoplay; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            src={`${updatedStage.stream}?autoplay=1&mute=1`}
            title={updatedStage.name}
            width="100%"
            height="100%"
          />
        </Video>
        <DiscordEmbed server="486522875931656193" channel="1080238817962885210" />
      </Container>
      <Schedule>
        <ScheduleSidebar allStages={updatedStages} />
      </Schedule>
    </div>
  );
}
