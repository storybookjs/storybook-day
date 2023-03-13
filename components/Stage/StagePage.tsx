import dynamic from 'next/dynamic';
import { Stage } from '@lib/types';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Schedule } from '@components/Schedule';

export const DiscordEmbed = dynamic(() => import('@widgetbot/react-embed'), {
  ssr: false
});

const { breakpoints } = styles;

type StageContainerProps = {
  stage: Stage;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: calc(100vh - 112px);

  @media (min-width: ${breakpoints[2]}px) {
    grid-template-columns: 2fr 1fr;
  }

  @media (min-width: ${breakpoints[3]}px) {
    grid-template-columns: 3fr 1.25fr;
  }
`;
const Chat = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  @media (min-width: ${breakpoints[2]}px) {
    display: block;
  }
`;

export function StagePage({ stage }: StageContainerProps) {
  return (
    <div>
      <Container>
        <iframe
          allow="autoplay; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          src={`${stage.stream}?autoplay=1&mute=1`}
          title={stage.name}
          width="100%"
          height="100%"
        />
        <Chat>
          <DiscordEmbed
            server="486522875931656193"
            channel="1080238817962885210"
            style={{ borderRadius: 0, width: '100%', height: '100%' }}
          />
        </Chat>
      </Container>
      <Schedule allStages={[stage]} inverse />
    </div>
  );
}
