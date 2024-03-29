import type { Meta, StoryObj } from '@storybook/react';
import isChromatic from 'chromatic/isChromatic';
import { Layout } from '@components/Layout';
import { HomePage } from './index';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
  component: HomePage,
  parameters: {
    chromatic: { viewports: [320, 440, 600, 900] }
  },
  decorators: [
    storyFn => (
      <Layout showFooter layoutStyle="default">
        {storyFn()}
      </Layout>
    )
  ]
};
export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  name: 'HomePage'
};
