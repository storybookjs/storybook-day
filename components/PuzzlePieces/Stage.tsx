import { FC, Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, SSAO, SMAA, DepthOfField } from '@react-three/postprocessing';
import { EdgeDetectionMode, BlendFunction } from 'postprocessing';
import { useControls } from 'leva';

const { breakpoints } = styles;

function Rig() {
  const { camera, mouse } = useThree();
  const [vec] = useState(() => new THREE.Vector3());

  return useFrame(() =>
    camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 1, camera.position.z), 0.04)
  );
}

const Container = styled.div`
  margin-top: -1rem;
  position: relative;
  background: transparent;
  z-index: -1;

  height: calc(40vh);

  @supports (height: 100svh) {
    height: calc(40svh);
  }

  @media (min-width: ${breakpoints[1]}px) {
    height: calc(60vh);

    @supports (height: 100svh) {
      height: calc(60svh);
    }
  }
`;

export const Stage: FC = ({ children }) => {
  return (
    <Container>
      <Canvas
        shadows
        dpr={typeof window === 'undefined' ? [1, 2] : window.devicePixelRatio}
        gl={{
          powerPreference: 'high-performance',
          antialias: false,
          stencil: false,
          depth: false,
          alpha: false
        }}
        camera={{ position: [0, 0, 24], near: 0.1, far: 48, fov: 45 }}
      >
        <color attach="background" args={['#E3F3FF']} />
        {/* lights */}
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[2.5, 12, 12]} intensity={1} />
        <pointLight position={[20, 20, 20]} intensity={1} />
        <pointLight position={[-20, -20, -20]} intensity={1} />
        {/* Scene contents */}
        {children}
      </Canvas>
    </Container>
  );
};
