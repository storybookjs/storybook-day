import type { Meta, StoryObj } from '@storybook/react';
import { TicketVisual } from './TicketVisual';

const meta: Meta<typeof TicketVisual> = {
  title: 'Pages/Ticket/TicketVisual',
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
    ticketNumber: 7521
  }
};

export const PartialUserInfo: Story = {
  args: {
    ...Default.args,
    username: 'winkerVSbecks'
  }
};

export const AllUserInfo: Story = {
  args: {
    ...PartialUserInfo.args,
    name: 'Varun Vachhar'
  }
};

export const Loading: Story = {
  args: {
    ...AllUserInfo.args,
    ticketGenerationState: 'loading'
  }
};
