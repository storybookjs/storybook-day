import type { Meta, StoryObj } from '@storybook/react';
import * as THREE from 'three';
import { StoryStage } from '../../.storybook/StoryStage';
import { VersionText } from './VersionText';

const meta: Meta<typeof VersionText> = {
  title: 'PuzzlePieces/VersionText',
  parameters: {
    layout: 'fullscreen'
  },
  component: VersionText,
  decorators: [
    storyFn => {
      return <StoryStage cameraPosition={new THREE.Vector3(0, 0, 30)}>{storyFn()}</StoryStage>;
    }
  ]
};
export default meta;
type Story = StoryObj<typeof VersionText>;

export const Default: Story = {};
