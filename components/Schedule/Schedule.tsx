import cn from 'classnames';
import { Stage, Talk } from '@lib/types';
import styles from './schedule.module.css';
import { TalkCard } from './TalkCard';

function StageRow({ stage }: { stage: Stage }) {
  // Group talks by the time block
  const timeBlocks = stage.schedule.reduce((allBlocks: any, talk) => {
    allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
    return allBlocks;
  }, {});

  return (
    <div key={stage.name} className={styles.row}>
      <h3 className={cn(styles['stage-name'], styles[stage.slug])}>
        <span>{stage.name}</span>
      </h3>
      <div className={cn(styles.talks, styles[stage.slug])}>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks[startTime].map((talk: Talk, index: number) => (
              <TalkCard key={talk.title} talk={talk} showTime={index === 0} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  allStages: Stage[];
};

/**
 *
 * 👋 Event kickoff [Chan `5min`]
 * 🗺️ Evolution of Storybook [Dom `10min`]
 *
 * --------------------------
 * Storybook 7
 * --------------------------
 * 🎥 Promo video [`1min`]
 * 🎨 Foundational Changes [Shilman `15min`]
 * ⚡ Perf [Ian VS `15min`]
 * 📝 Docs revamp [Tom `10min`]
 * 🧪 Test [Yann `15min`]
 * 🧩 Compatibility [Kyle `10min`]
 * 🚦 Stability  [Shilman `10min`]
 * --------------------------
 *
 * BREAK [`15min`]
 *
 * --------------------------
 * 💼 Use cases
 * --------------------------
 *   How [Monday.com](http://monday.com/) uses Storybook [Orr Gottlieb] [`10min`]
 *   Who owns this component? It Depends! [Natalia Zmyslowska] [`10min`]
 *   Faster feature development with storybook, mirage and interactions [Christopher Webb] [`10min`]
 *   Cultivating a Digital Garden in Storybook [Tricia Leach] [`10min`]
 *   Storybook at the Guardian [Oliver Barnwell] [`10min`]
 *   Conquer Style Bleeding with the CSS Chaos Addon [Alex Wilson] [`10min`]
 *
 * --------------------------
 * 🌐 Ecosystem
 * --------------------------
 *    Shaun [`10min`]
 *    Katerina [`10min`]
 * --------------------------
 * ⏭️ What’s next [Shilman `5mins`]
 * 👋 Wrap-up [Chan `5min`]
 */

export function Schedule({ allStages }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        {allStages.map(stage => (
          <StageRow key={stage.slug} stage={stage} />
        ))}
      </div>
    </div>
  );
}
