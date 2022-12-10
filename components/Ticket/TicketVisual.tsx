import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { TicketGenerationState } from '@lib/constants';
import { TicketProfile } from './TicketProfile';
import { TicketInfo } from './TicketInfo';
import { ByChromatic } from '@components/ByChromatic';
import { TicketShape } from './TicketShape';

const { color, text } = styles;
const border = 'rgba(0, 0, 0, 0.2)';

const SVG = styled.svg`
  display: block;
  filter: drop-shadow(0px 52.2449px 39.1837px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 130.612px 104.49px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 13.0612px 26.1224px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 1.30612px 3.91837px rgba(0, 0, 0, 0.1));
`;

function TicketHorizontal() {
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

        <clipPath id="svgPath">
          <path
            fill="#000"
            d="M0 330V203.293c11.652-4.118 20-15.231 20-28.293s-8.348-24.175-20-28.293V20C0 8.954 8.954 0 20 0h454c11.046 0 20 8.954 20 20v126.373c-12.171 3.823-21 15.194-21 28.627 0 13.433 8.829 24.804 21 28.627V330c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20Z"
          />
        </clipPath>
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

function TicketVertical() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="350"
      height="495"
      fill="none"
      viewBox="0 0 350 495"
    >
      <path
        fill="#fff"
        d="M20 1h126.707c4.118 11.652 15.231 20 28.293 20s24.175-8.348 28.293-20H330c11.046 0 20 8.954 20 20v454c0 11.046-8.954 20-20 20H203.627c-3.823-12.171-15.194-21-28.627-21-13.433 0-24.804 8.829-28.627 21H20c-11.046 0-20-8.954-20-20V21C0 9.954 8.954 1 20 1z"
      ></path>
    </svg>
  );
}

const Visual = styled.div`
  position: relative;
  transform: translateZ(0);
  width: 500px;
`;

const ContentContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  /* padding: calc(44px * var(--size)) calc(64px * var(--size)); */
  /* padding: 5% 8% 5% 8%; */
`;

const Content = styled.div`
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

const GlareContainer = styled.div`
  && {
    border-radius: 7px;
    overflow: hidden;
    top: 20px !important;
    left: 40px !important;
    right: 40px !important;
    bottom: 20px !important;
    width: auto !important;
    height: auto !important;
  }
`;
const Glare = styled.div`
  && {
    background-image: linear-gradient(
      290deg,
      hsl(271deg 59% 42%) 0%,
      hsl(209deg 100% 44%) 20%,
      hsl(198deg 100% 45%) 29%,
      hsl(184deg 100% 42%) 36%,
      hsl(165deg 66% 54%) 43%,
      hsl(108deg 54% 63%) 50%,
      hsl(57deg 72% 47%) 57%,
      hsl(36deg 100% 55%) 64%,
      hsl(20deg 100% 63%) 71%,
      hsl(358deg 100% 68%) 80%,
      hsl(340deg 100% 64%) 100%
    ) !important;
  }
`;

type TicketVisualProps = {
  size?: number;
  name?: string;
  ticketNumber?: number;
  username?: string;
  ticketGenerationState?: TicketGenerationState;
};

export const TicketVisual = ({
  name,
  username,
  ticketNumber,
  ticketGenerationState = 'default'
}: TicketVisualProps) => {
  return (
    <Visual>
      <TicketShape />
      <ContentContainer>
        <Content>
          <Top>
            <TicketInfo ticketNumber={ticketNumber} />
          </Top>
          <Middle>
            <TicketProfile
              name={name}
              username={username}
              loading={ticketGenerationState === 'loading'}
            />
          </Middle>
          <Bottom>
            <ByChromatic monochrome /> storybook.js.org/day
          </Bottom>
        </Content>
      </ContentContainer>
      <GlareContainer className="js-tilt-glare">
        <Glare className="js-tilt-glare-inner" />
      </GlareContainer>
    </Visual>
  );
};
