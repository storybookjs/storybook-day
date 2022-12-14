import type { Meta, StoryObj } from '@storybook/react';
import { TicketOGImage } from './TicketOGImage';

const meta: Meta<typeof TicketOGImage> = {
  title: 'Pages/Ticket/TicketOGImage',
  component: TicketOGImage,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'gradient' }
  }
};

export default meta;
type Story = StoryObj<typeof TicketOGImage>;

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
