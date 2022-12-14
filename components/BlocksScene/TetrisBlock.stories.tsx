import type { Meta, StoryObj } from '@storybook/react';
import * as THREE from 'three';
import { Center } from '@react-three/drei';
import { StoryStage } from '../../.storybook/StoryStage';
import { TetrisBlock, TetrisBlockType } from './TetrisBlock';

const meta: Meta<typeof TetrisBlock> = {
  title: 'PuzzlePieces/TetrisBlock',
  parameters: {
    layout: 'fullscreen'
  },
  component: TetrisBlock,
  decorators: [
    storyFn => {
      return <StoryStage cameraPosition={new THREE.Vector3(-30, 30, 30)}>{storyFn()}</StoryStage>;
    }
  ]
};
export default meta;
type Story = StoryObj<typeof TetrisBlock>;

const ShapeScene = ({ type }: { type: TetrisBlockType }) => (
  <group scale={5}>
    <TetrisBlock type={type} color="#1EA7FD" />
  </group>
);

export const I: Story = { render: () => <ShapeScene type="I" /> };
export const L: Story = { render: () => <ShapeScene type="L" /> };
export const O: Story = { render: () => <ShapeScene type="O" /> };
export const T: Story = { render: () => <ShapeScene type="T" /> };
export const Z: Story = { render: () => <ShapeScene type="Z" /> };

export const CentredInSphere: Story = {
  render: () => (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <Center
        position={[25, 0, 0]}
        onCentered={({ container }) => {
          container.scale.setScalar(0.5);
        }}
      >
        <ShapeScene type="Z" />
      </Center>
    </>
  )
};
