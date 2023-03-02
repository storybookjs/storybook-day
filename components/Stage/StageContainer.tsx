import useSWR from 'swr';
import dynamic from 'next/dynamic';
import cn from 'classnames';
import { Stage } from '@lib/types';
import { withPrefix } from '@lib/with-prefix';
import { styled } from '@storybook/theming';
import { Button, Icon, Input } from '@storybook/design-system';
// import { styles } from '@storybook/components-marketing';
import styles from './stage-container.module.css';
import styleUtils from './utils.module.css';
import ScheduleSidebar from './schedule-sidebar';

export const DiscordEmbed = dynamic(() => import('@widgetbot/react-embed'), {
  ssr: false
});

const { color } = styles;

type StageContainerProps = {
  stage: Stage;
  allStages: Stage[];
};

export function StageContainer({ stage, allStages }: StageContainerProps) {
  const response = useSWR(withPrefix('/api/stages'), {
    initialData: allStages,
    refreshInterval: 5000
  });
  const updatedStages = response.data || [];
  const updatedStage = updatedStages.find((s: Stage) => s.slug === stage.slug) || stage;

  return (
    <div>
      <h2 className={styles.stageName}>{stage.name}</h2>
      <div className={styles.container}>
        <div className={`${styles.streamContainer} ${styles.streamYt}`} style={{ width: '60%' }}>
          {!stage.isLive ? (
            <iframe
              allow="autoplay; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              src={`${updatedStage.stream}?autoplay=1&mute=1`}
              title={updatedStage.name}
              width="100%"
              style={{ height: '60vh' }}
            />
          ) : (
            'waiting for stream to start'
          )}
        </div>
        <DiscordEmbed
          server="486522875931656193"
          channel="1080238817962885210"
          style={{ width: '40%' }}
        />
      </div>
      <ScheduleSidebar allStages={updatedStages} />
    </div>
  );
}
