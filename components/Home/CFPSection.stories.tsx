import type { Meta, StoryObj } from '@storybook/react';
import { CFPSection } from './CFPSection';

const meta: Meta<typeof CFPSection> = {
  title: 'Pages/Home/CFPSection',
  component: CFPSection
};
export default meta;
type Story = StoryObj<typeof CFPSection>;

export const Default: Story = { args: {} };
