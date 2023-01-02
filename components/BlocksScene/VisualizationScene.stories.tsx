import type { Meta, StoryObj } from '@storybook/react';
import { VisualizationScene } from './VisualizationScene';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const meta: Meta<typeof VisualizationScene> = {
  title: 'BlocksScene/VisualizationScene',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'blue' }
  },
  component: VisualizationScene,
  argTypes: {
    focusDistance: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    bokehScale: { control: { type: 'range', min: 0, max: 20, step: 1 } },
    focalLength: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    depthOfField: { control: { type: 'boolean' } },
    shadows: { control: { type: 'boolean' } },
    blocks: { control: { type: 'boolean' } },
    text: { control: { type: 'boolean' } }
  },
  args: {
    focusDistance: 0.5,
    bokehScale: 7,
    focalLength: 0.2,
    depthOfField: false,
    shadows: false,
    blocks: true,
    text: true
  },
  decorators: [
    storyFn => {
      return (
        <div style={{ height: '75vh' }}>
          <Canvas
            shadows
            dpr={window.devicePixelRatio}
            camera={{ position: [0, 24, 0], near: 0.1, far: 1000, fov: 45 }}
          >
            <color attach="background" args={['#E3F3FF']} />
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[2.5, 12, 12]} intensity={1} />
            <pointLight position={[20, 20, 20]} intensity={1} />
            <pointLight position={[-20, -20, -20]} intensity={1} />
            <OrbitControls />
            {storyFn()}
          </Canvas>
        </div>
      );
    }
  ]
};
export default meta;
type Story = StoryObj<typeof VisualizationScene>;

export const Default: Story = {
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};
