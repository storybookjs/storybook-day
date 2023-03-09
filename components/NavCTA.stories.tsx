import type { Meta, StoryObj } from '@storybook/react';
import { NavCTA } from './NavCTA';

const meta: Meta<typeof NavCTA> = {
  title: 'Components/NavCTA',
  component: NavCTA
};

export default meta;
type Story = StoryObj<typeof NavCTA>;

export const Default: Story = {};

export const LiveMode: Story = {
  args: {
    mode: 'live'
  }
};
