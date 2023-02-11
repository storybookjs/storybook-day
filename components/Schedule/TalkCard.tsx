import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { parseISO, format, isBefore, isAfter } from 'date-fns';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Talk } from '@lib/types';
import { Avatar } from '@storybook/design-system';

const { color, spacing, typography, breakpoints } = styles;

type Props = {
  key: string;
  talk: Talk;
  showTime: boolean;
};

const formatDate = (date: string) => {
  // https://github.com/date-fns/date-fns/issues/946
  return format(parseISO(date), "h:mmaaaaa'm'");
};

const Inner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: ${breakpoints[1]}px) {
    gap: 20px;
    align-items: center;
    flex-direction: row;
  }
`;
const Title = styled.div`
  font-weight: ${typography.weight.extrabold};
  font-size: ${typography.size.s3}px;
  line-height: 24px;
  color: color.darkest;
`;
const Description = styled.div`
  font-size: ${typography.size.s3};
  line-height: 24px;
  color: color.darkest;
`;

const TalkWrapper = styled.button`
  border: 1px solid ${color.border};
  background-color: ${color.lightest};
  border-radius: ${spacing.borderRadius.small}px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 20px;
  align-items: center;
  cursor: pointer;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  outline: 0;
  &:hover,
  &:focus {
    border-color: ${color.secondary};
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0 0 0 8%) 0 3px 10px 0;
  }
  &:active,
  &[aria-pressed='true'] {
    border-color: ${color.secondary};
    transform: translate3d(0, 0, 0);
  }
`;

const Time = styled.div`
  flex: 1;

  @media (min-width: ${breakpoints[1]}px) {
    flex: none;
  }
`;

export function TalkCard({
  talk: { title, description, speaker: speakers, start, end },
  showTime
}: Props) {
  const [isTalkLive, setIsTalkLive] = useState(false);
  const [startAndEndTime, setStartAndEndTime] = useState('');

  useEffect(() => {
    const now = Date.now();
    setIsTalkLive(isAfter(now, parseISO(start)) && isBefore(now, parseISO(end)));
    setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
  }, [end, start]);

  const firstSpeakerLink = `/speakers/${speakers[0].slug}`;
  const speaker = speakers[0];

  return (
    <TalkWrapper>
      <Inner>
        <Time>{startAndEndTime || <>&nbsp;</>}</Time>
        <div>
          <Title>{title}</Title>
          <Description>{speaker.name}</Description>
        </div>
      </Inner>
      <div>
        <Avatar username={speaker.name} src={speaker.image.url} size="large" />
      </div>
      {/* <div key={speaker.name}>
        <Image
          loading="lazy"
          alt={speaker.name}
          src={speaker.image.url}
          title={speaker.name}
          width={24}
          height={24}
        />
      </div> */}
    </TalkWrapper>
    // <div key={title} className={styles.talk}>
    //   {showTime && <p className={styles.time}>{startAndEndTime || <>&nbsp;</>}</p>}
    //   <Link href={firstSpeakerLink}>
    //     <a
    //       className={cn(styles.card, {
    //         [styles['is-live']]: isTalkLive
    //       })}
    //     >
    //       <div className={styles['card-body']}>
    //         <h4 title={title} className={styles.title}>
    //           {title}
    //         </h4>
    //         <div className={styles.speaker}>
    //           <div className={styles['avatar-group']}>
    //             {speaker.map(s => (
    //               <div key={s.name} className={styles['avatar-wrapper']}>
    //                 <Image
    //                   loading="lazy"
    //                   alt={s.name}
    //                   className={styles.avatar}
    //                   src={s.image.url}
    //                   title={s.name}
    //                   width={24}
    //                   height={24}
    //                 />
    //               </div>
    //             ))}
    //           </div>
    //           <h5 className={styles.name}>
    //             {speaker.length === 1 ? speaker[0].name : `${speaker.length} speakers`}
    //           </h5>
    //         </div>
    //       </div>
    //     </a>
    //   </Link>
    // </div>
  );
}
