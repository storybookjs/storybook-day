import { useEffect, useRef, useState } from 'react';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Cardinal } from '@storybook/design-system';
import { SHORT_TIME, SHORT_TIMEZONE, SHORT_DATE } from '@lib/constants';
import { TicketGenerationState } from '@lib/constants';
import TicketColoredMobile from './ticket-colored-mobile';
import TicketColored from './ticket-colored';
// import styles from './ticket-visual.module.css';
import TicketProfile from './ticket-profile';
import TicketInfo from './ticket-info';
import { StorybookDayLogo } from '@components/StorybookDayLogo';
import { ByChromatic } from '@components/ByChromatic';

const { typography, color, spacing, text } = styles;
const border = 'rgba(0, 0, 0, 0.2)';

const SVG = styled.svg`
  filter: drop-shadow(0px 52.2449px 39.1837px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 130.612px 104.49px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 13.0612px 26.1224px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 1.30612px 3.91837px rgba(0, 0, 0, 0.1));
`;

export default function TicketHorizontal() {
  return (
    <SVG
      width="100%"
      height="100%"
      viewBox="0 0 494 350"
      fill="none"
      xmlns="http://www.w3.org/2000/SVG"
    >
      <defs>
        <linearGradient
          id="ticket-hologram-gradient"
          x1="105"
          y1="319"
          x2="599"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0156834" stop-color="#FC521F" />
          <stop offset="0.265625" stop-color="#66FC1F" />
          <stop offset="0.479167" stop-color="#1FC0C0" />
          <stop offset="0.734375" stop-color="#7A718B" />
          <stop offset="1" stop-color="#DD1FFC" />
        </linearGradient>
      </defs>
      <path
        d="M0 330V203.293c11.652-4.118 20-15.231 20-28.293s-8.348-24.175-20-28.293V20C0 8.954 8.954 0 20 0h454c11.046 0 20 8.954 20 20v126.373c-12.171 3.823-21 15.194-21 28.627 0 13.433 8.829 24.804 21 28.627V330c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20Z"
        opacity="0.95"
        fill="#fff"
      />
      <path
        d="M0 330V203.293c11.652-4.118 20-15.231 20-28.293s-8.348-24.175-20-28.293V20C0 8.954 8.954 0 20 0h454c11.046 0 20 8.954 20 20v126.373c-12.171 3.823-21 15.194-21 28.627 0 13.433 8.829 24.804 21 28.627V330c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20Z"
        opacity="0.1"
        fill="url(#ticket-hologram-gradient)"
      />
    </SVG>
  );
}

const Visual = styled.div`
  position: relative;
  transform: translateZ(0);
  width: 500px;
`;

const ProfileContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  /* padding: calc(44px * var(--size)) calc(64px * var(--size)); */
  /* padding: 5% 8% 5% 8%; */
`;

const Profile = styled.div`
  border: 1px solid ${border};
  border-radius: 7px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 20px 15px;
  border-bottom: 1px solid ${border};

  svg {
    height: 24px;
  }
`;

const TicketNumber = styled.div`
  border-radius: ${spacing.borderRadius.small}px;
  padding: 4px 8px 4px 8px;
  border: 1px solid ${color.secondary};
  color: ${color.secondary};
  font-family: ${typography.type.code};
  font-weight: 400;
  font-size: ${typography.size.s2}px;
  line-height: 16px;
`;

const Bottom = styled.div`
  ${text.regular};
  color: ${color.darkest};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 20px 15px;
  border-top: 1px solid ${border};
`;

const Middle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding-left: 40px;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 40px;
`;
const Info = styled(Cardinal)`
  padding: 0;
  flex: none;
`;

const Version = styled.div`
  display: inline-block;
  background-size: cover;
  background-image: url('text-gradient-backdrop.svg');
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 83px;
  font-weight: 600;
  line-height: 100px;
  letter-spacing: -0.08em;
`;

type TicketVisualProps = {
  size?: number;
  name?: string;
  ticketNumber?: number;
  username?: string;
  ticketGenerationState?: TicketGenerationState;
};

export const TicketVisual = ({
  size = 1,
  name,
  username,
  ticketNumber,
  ticketGenerationState = 'default'
}: TicketVisualProps) => {
  const numDigits = `${ticketNumber}`.length;
  const prefix = `000000`.slice(numDigits);

  return (
    <Visual style={{ ['--size' as string]: size }}>
      <TicketHorizontal />
      <ProfileContainer>
        <Profile>
          <Top>
            <StorybookDayLogo />
            <TicketNumber>
              #{prefix}
              {ticketNumber}
            </TicketNumber>
          </Top>
          <Middle>
            <div>
              <Version>7.0</Version>
            </div>
            <InfoWrapper>
              <Info size="small" text={SHORT_TIMEZONE} count={SHORT_TIME} />
              <Info size="small" text="Online event" count={SHORT_DATE} />
            </InfoWrapper>
          </Middle>
          <Bottom>
            <ByChromatic monochrome /> storybook.js.org/day
          </Bottom>
        </Profile>
      </ProfileContainer>
      {/* <div className={styles.visual} style={{ ['--size' as string]: size }}>
        <div className={styles['horizontal-ticket']}>
          {username ? <TicketColored /> : <TicketMono />}
        </div>
        <div className={styles['vertical-ticket']}>
          {username ? <TicketColoredMobile /> : <TicketMonoMobile />}
        </div>
        <div className={styles.profile}>
          <TicketProfile
            name={name}
            username={username}
            size={size}
            ticketGenerationState={ticketGenerationState}
          />
        </div>
        <div className={styles.info}>
          <TicketInfo logoTextSecondaryColor={ticketNumber ? 'var(--brand)' : undefined} />
        </div>
        {ticketNumber && (
          <div className={styles['ticket-number-wrapper']}>
            <div className={styles['ticket-number']}>
              <TicketNumber number={ticketNumber} />
            </div>
          </div>
        )}
      </div> */}
    </Visual>
  );
};
