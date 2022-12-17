import Tilt from 'vanilla-tilt';
import { useRef, useEffect, useState } from 'react';
import { UserData } from '@lib/hooks/use-conf-data';
import { TicketGenerationState } from '@lib/constants';
import isMobileOrTablet from '@lib/is-mobile-or-tablet';
import { scrollTo } from '@lib/smooth-scroll';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { DATE, SITE_NAME } from '@lib/constants';
import { FreeStickers } from '@components/FreeStickers';
import { RegistrationForm } from '@components/RegistrationForm';
import { TicketVisual } from './TicketVisual';
import { TicketActions } from './TicketActions';
import { CustomizationForm } from './CustomizationForm';

const { marketing, breakpoints, color, pageMargins } = styles;

const Wrapper = styled.div`
  ${pageMargins};
  display: flex;
  width: 100%;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (min-width: ${breakpoints[2]}px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 0.75rem;
  color: ${color.darkest};

  ${marketing.heading};

  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.hero2};
  }
`;

const Subtitle = styled.div`
  ${marketing.textLarge};
`;

const Divider = styled.hr`
  border-color: ${color.border};
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const CustomizationContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${breakpoints[3]}px) {
    flex-direction: row;
    gap: 40px;
  }
`;

const StyledRegistrationForm = styled(RegistrationForm)`
  min-width: 320px;
  max-width: 400px;
`;

const TicketInfoContainer = styled.div`
  min-width: 0;
`;

interface TicketProps {
  username: UserData['username'];
  ticketNumber: UserData['ticketNumber'];
  name: UserData['name'];
  sharePage?: boolean;
}

export const Ticket = ({ username, name, ticketNumber, sharePage }: TicketProps) => {
  const ticketRef = useRef<HTMLDivElement>(null);
  const [ticketGenerationState, setTicketGenerationState] = useState<TicketGenerationState>(
    'default'
  );
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ticketRef.current && !window.matchMedia('(pointer: coarse)').matches) {
      Tilt.init(ticketRef.current, {
        glare: true,
        max: 5,
        'max-glare': 0.08,
        'glare-prerender': false,
        'full-page-listening': true
      });
    }
  }, [ticketRef]);

  useEffect(() => {
    if (!sharePage && divRef && divRef.current && isMobileOrTablet()) {
      scrollTo(divRef.current, -30);
    }
  }, [divRef, sharePage]);

  return (
    <Wrapper ref={divRef}>
      <Container>
        <TicketInfoContainer>
          <div>
            {sharePage ? (
              <>
                <Title>{name ? <>{name}’s ticket</> : <>{SITE_NAME}</>}</Title>
                <Subtitle>
                  Join {name ?? 'us'} on {DATE} for Storybook Day.
                </Subtitle>
              </>
            ) : (
              <>
                <Title>{username ? <>Your custom ticket</> : <>You’re in!</>}</Title>
                <Subtitle>
                  {username ? (
                    <>Share your ticket to invite others to join you.</>
                  ) : (
                    <>Customize the ticket with your GitHub profile</>
                  )}
                </Subtitle>
              </>
            )}
          </div>
          <CustomizationContainer>
            {!sharePage ? (
              <CustomizationForm
                defaultUsername={username}
                setTicketGenerationState={setTicketGenerationState}
              />
            ) : (
              <StyledRegistrationForm sharePage />
            )}
          </CustomizationContainer>
          {!username && <FreeStickers />}
          {!sharePage && username && (
            <>
              <Divider />
              <TicketActions username={username} />
            </>
          )}
        </TicketInfoContainer>

        <div ref={ticketRef}>
          <TicketVisual
            username={username}
            name={name}
            ticketNumber={ticketNumber}
            ticketGenerationState={ticketGenerationState}
          />
        </div>
      </Container>
    </Wrapper>
  );
};
