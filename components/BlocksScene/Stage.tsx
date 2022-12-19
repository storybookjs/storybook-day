import { FC, useEffect, useState } from 'react';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Canvas, useThree } from '@react-three/fiber';

const { breakpoints } = styles;

const Container = styled.div`
  position: relative;
  background: transparent;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  canvas {
    opacity: 0;
    touch-action: none;
    animation: fade-in 2.5s ease 0.5s forwards;
  }

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

function LoopControl({ setFrameLoop }: { setFrameLoop: (value: 'demand' | 'always') => void }) {
  const { invalidate } = useThree();

  useEffect(() => {
    const viewportWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (viewportWidth < 400) {
      setFrameLoop('demand');
      invalidate();
    }
  }, [invalidate, setFrameLoop]);

  return null;
}

export const Stage: FC = ({ children }) => {
  const [frameLoop, setFrameLoop] = useState<'demand' | 'always'>('always');

  return (
    <Container aria-label="Storybook 7.0" role="img">
      <Canvas
        frameloop={frameLoop}
        resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
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
        <LoopControl setFrameLoop={setFrameLoop} />
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
