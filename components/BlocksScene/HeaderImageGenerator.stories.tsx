import type { Meta, StoryObj } from '@storybook/react';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import { styled } from '@storybook/theming';
import { VersionText } from './VersionText';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ColorRepresentation } from 'three';
import { Billboard, Image } from '@react-three/drei';

type HeaderImageGenerator = { bgColor: ColorRepresentation; major?: number; minor?: number };

const meta: Meta<HeaderImageGenerator> = {
  title: 'BlocksScene/HeaderImageGenerator',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'blue' }
  },
  component: VersionText
};
export default meta;
type Story = StoryObj<HeaderImageGenerator>;

const Wrapper = styled.div`
  position: relative;
  width: 1200px;
  height: 640px;
`;
const Overlay = styled.img`
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  user-select: none;
`;

export const Default: Story = {
  render: args => (
    <Wrapper>
      <Canvas
        frameloop="always"
        resize={{ scroll: false, debounce: { scroll: 500, resize: 500 } }}
        shadows
        dpr={typeof window === 'undefined' ? 1 : window.devicePixelRatio}
        gl={{
          powerPreference: 'high-performance',
          antialias: false,
          stencil: false,
          depth: false
        }}
        camera={{ position: [0, 0, 30], near: 0.1, far: 60, fov: 45 }}
      >
        <color attach="background" args={[args.bgColor]} />
        {/* lights */}
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[2.5, 12, 12]} intensity={1} />
        <pointLight position={[20, 20, 20]} intensity={1} />
        <pointLight position={[-20, -20, -20]} intensity={1} />
        {/* Scene contents */}
        <Suspense fallback={null}>
          <group position={[0, 0.5, 0]}>
            <VersionText major={args.major} minor={args.minor} />
            <Billboard position={[0, 0, 1]}>
              <Image url="/overlay.png" transparent scale={[1200 * 0.039, 640 * 0.039]} />
            </Billboard>
            <EffectComposer multisampling={8}>
              <DepthOfField focusDistance={0.5} bokehScale={7} focalLength={0.2} />
            </EffectComposer>
          </group>
        </Suspense>
      </Canvas>
    </Wrapper>
  ),
  args: {
    bgColor: '#FEFAF1',
    major: 7,
    minor: 1
  },
  parameters: {
    chromatic: { disableSnapshot: true }
  }
};
