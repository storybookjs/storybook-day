import { Layout } from '@components/Layout';
import type { Meta, StoryObj } from '@storybook/react';
import { Ticket } from './Ticket';

const meta: Meta<typeof Ticket> = {
  title: 'Pages/Ticket/Ticket',
  component: Ticket,
  parameters: {
    backgrounds: { default: 'gradient' }
  },
  decorators: [
    storyFn => (
      <Layout showFooter={false} layoutStyle="full">
        {storyFn()}
      </Layout>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Ticket>;

export const Default: Story = {
  args: {
    ticketNumber: 1
  }
};

export const Authenticated: Story = {
  args: {
    username: 'winkerVSbecks',
    name: 'Varun Vachhar',
    ticketNumber: 1
  }
};

export const SharePage: Story = {
  args: {
    ...Authenticated.args,
    sharePage: true
  }
};

export const ShareNoName: Story = {
  args: {
    username: 'winkerVSbecks',
    sharePage: true
  }
};
