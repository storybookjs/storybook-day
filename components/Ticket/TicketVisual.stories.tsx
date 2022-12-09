import type { Meta, StoryObj } from '@storybook/react';
import { TicketVisual } from './TicketVisual';

const meta: Meta<typeof TicketVisual> = {
  title: 'Pages/TicketPage/TicketVisual',
  component: TicketVisual,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'gradient' }
  }
};

export default meta;
type Story = StoryObj<typeof TicketVisual>;

export const Default: Story = {
  args: {
    name: 'Varun Vachhar',
    username: 'winkerVSbecks',
    ticketNumber: 7521
  }
};
