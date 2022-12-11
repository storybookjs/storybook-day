import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { TicketGenerationState } from '@lib/constants';
import { TicketProfile } from './TicketProfile';
import { TicketInfo } from './TicketInfo';
import { ByChromatic } from '@components/ByChromatic';
import { TicketShape } from './TicketShape';

const { color, text, breakpoints } = styles;
const border = 'rgba(0, 0, 0, 0.2)';

const Visual = styled.div`
  flex: none;
  position: relative;
  transform: translateZ(0);
  width: 320px;

  @media (min-width: ${370}px) {
    width: 350px;
  }

  @media (min-width: ${breakpoints[1]}px) {
    width: 500px;
    max-width: none;
  }
`;

const ContentContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 40px 20px;

  @media (min-width: ${breakpoints[1]}px) {
    padding: 20px 40px;
  }
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
  justify-content: center;
  padding: 17px 20px 15px;
  border-bottom: 1px solid ${border};

  @media (min-width: ${breakpoints[1]}px) {
    justify-content: space-between;
  }

  svg {
    height: 24px;
  }
`;

const Bottom = styled.div`
  ${text.regular};
  color: ${color.darkest};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 17px 20px 15px;
  border-top: 1px solid ${border};
  text-align: center;

  @media (min-width: ${breakpoints[1]}px) {
    justify-content: space-between;
  }
`;

const Middle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  @media (min-width: ${breakpoints[1]}px) {
    padding-left: 40px;
  }
`;

const GlareContainer = styled.div`
  && {
    border-radius: 7px;
    overflow: hidden;
    top: 40px !important;
    left: 20px !important;
    right: 20px !important;
    bottom: 40px !important;
    width: auto !important;
    height: auto !important;

    @media (min-width: ${breakpoints[1]}px) {
      top: 20px !important;
      left: 40px !important;
      right: 40px !important;
      bottom: 20px !important;
    }
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

const Site = styled.span`
  display: none;

  @media (min-width: ${breakpoints[1]}px) {
    display: inline;
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
  const numDigits = `${ticketNumber}`.length;
  const prefix = `000000`.slice(numDigits);
  const formattedTickerNumber = `#${prefix}${ticketNumber}`;

  return (
    <Visual>
      <TicketShape />
      <ContentContainer>
        <Content>
          <Top>
            <TicketInfo ticketNumber={formattedTickerNumber} />
          </Top>
          <Middle>
            <TicketProfile
              name={name}
              username={username}
              loading={ticketGenerationState === 'loading'}
              ticketNumber={formattedTickerNumber}
            />
          </Middle>
          <Bottom>
            <ByChromatic monochrome />
            <Site>storybook.js.org/day</Site>
          </Bottom>
        </Content>
      </ContentContainer>
      <GlareContainer className="js-tilt-glare">
        <Glare className="js-tilt-glare-inner" />
      </GlareContainer>
    </Visual>
  );
};
