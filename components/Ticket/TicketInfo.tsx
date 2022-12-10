import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { StorybookDayLogo } from '@components/StorybookDayLogo';

const { typography, color, spacing } = styles;

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

type TicketInfoProps = {
  ticketNumber?: number;
};

export const TicketInfo = ({ ticketNumber }: TicketInfoProps) => {
  const numDigits = `${ticketNumber}`.length;
  const prefix = `000000`.slice(numDigits);

  return (
    <>
      <StorybookDayLogo aria-label="Storybook Day ticket" />
      <TicketNumber>
        #{prefix}
        {ticketNumber}
      </TicketNumber>
    </>
  );
};
