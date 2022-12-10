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
    ticketNumber: 7521
  }
};

export const WithUserInfo: Story = {
  args: {
    ...Default.args,
    name: 'Varun Vachhar',
    username: 'winkerVSbecks'
  }
};

export const Loading: Story = {
  args: {
    ...WithUserInfo.args,
    ticketGenerationState: 'loading'
  }
};
