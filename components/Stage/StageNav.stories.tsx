import type { Meta, StoryObj } from '@storybook/react';
import { StageNav } from './StageNav';

const meta: Meta<typeof StageNav> = {
  title: 'Pages/StagePage/StageNav',
  component: StageNav
};

export default meta;
type Story = StoryObj<typeof StageNav>;

export const Default: Story = { parameters: { backgrounds: { default: 'dark' } } };
