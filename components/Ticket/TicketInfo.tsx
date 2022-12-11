import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { StorybookDayLogo } from '@components/StorybookDayLogo';

const { typography, color, spacing, breakpoints } = styles;

const TicketNumber = styled.div`
  border-radius: ${spacing.borderRadius.small}px;
  padding: 4px 8px 4px 8px;
  border: 1px solid ${color.secondary};
  color: ${color.secondary};
  font-family: ${typography.type.code};
  font-weight: 400;
  font-size: ${typography.size.s2}px;
  line-height: 16px;
  display: none;

  @media (min-width: ${breakpoints[1]}px) {
    display: block;
  }
`;

type TicketInfoProps = {
  ticketNumber?: string;
};

export const TicketInfo = ({ ticketNumber }: TicketInfoProps) => (
  <>
    <StorybookDayLogo aria-label="Storybook Day ticket" />
    <TicketNumber>{ticketNumber}</TicketNumber>
  </>
);
