import type { Meta, StoryObj } from '@storybook/react';
import * as THREE from 'three';
import { StoryStage } from '../../.storybook/StoryStage';
import { Block, OtherBlockType } from './Block';

const meta: Meta<typeof Block> = {
  title: 'BlocksScene/OtherBlock',
  parameters: {
    layout: 'fullscreen'
  },
  component: Block,
  decorators: [
    storyFn => {
      return <StoryStage cameraPosition={new THREE.Vector3(-30, 30, 30)}>{storyFn()}</StoryStage>;
    }
  ]
};
export default meta;
type Story = StoryObj<typeof Block>;

const ShapeScene = ({ type }: { type: OtherBlockType }) => (
  <group scale={5}>
    <Block type={type} color="#FFAE00" />
  </group>
);

export const Sphere: Story = { render: () => <ShapeScene type="sphere" /> };
export const Cylinder: Story = { render: () => <ShapeScene type="cylinder" /> };
export const Torus: Story = { render: () => <ShapeScene type="torus" /> };
export const Cone: Story = { render: () => <ShapeScene type="cone" /> };
export const Box: Story = { render: () => <ShapeScene type="box" /> };
