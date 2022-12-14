import { FC, useState } from 'react';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';

const { breakpoints } = styles;

const Container = styled.div`
  position: relative;
  background: transparent;

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
    <Container aria-label="Storybook 7.0" role="img">
      <Canvas
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
