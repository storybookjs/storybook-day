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

type TicketProps = {
  username: UserData['username'];
  ticketNumber: UserData['ticketNumber'];
  name: UserData['name'];
  sharePage?: boolean;
};

const Wrapper = styled.div`
  ${pageMargins};
  display: flex;
  align-items: center;

  /* @media (min-width: ${breakpoints[3]}px) { */
  padding-top: 4rem;
  padding-bottom: 4rem;
  /* } */
`;

const Title = styled.h1`
  ${marketing.hero2};
  color: ${color.darkest};

  @media (min-width: ${breakpoints[0]}px) {
    ${marketing.hero1};
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
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${breakpoints[3]}px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const StyledRegistrationForm = styled(RegistrationForm)`
  @media (min-width: ${breakpoints[3]}px) {
    max-width: 400px;
  }
`;

const TicketInfoContainer = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

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
                <Title>{name ? <>{name}’s Ticket</> : <>{SITE_NAME}</>}</Title>
                <Subtitle>
                  {sharePage ? (
                    <>
                      Join {name ?? 'them'} on {DATE} for Storybook Day.
                    </>
                  ) : (
                    <>Customize the ticket with your GitHub profile</>
                  )}
                </Subtitle>
              </>
            ) : (
              <>
                <Title>{username ? <>Your custom ticket</> : <>You’re in!</>}</Title>
                <Subtitle>
                  {username ? (
                    <>Customize the ticket with your GitHub profile</>
                  ) : (
                    <>Share your ticket to invite others to join you.</>
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
