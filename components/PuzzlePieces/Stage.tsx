import { FC, Suspense, useState } from 'react';
import * as THREE from 'three';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, SSAO, SMAA } from '@react-three/postprocessing';
import { EdgeDetectionMode } from 'postprocessing';

const { breakpoints, pageMargins } = styles;

function Rig() {
  const { camera, mouse } = useThree();
  const [vec] = useState(() => new THREE.Vector3());

  return useFrame(() =>
    camera.position.lerp(vec.set(mouse.x * 1, mouse.y * 1, camera.position.z), 0.04)
  );
}

const Container = styled.div`
  margin-top: -1rem;
  margin-bottom: -1rem;
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
    <Container>
      <Canvas onCreated={state => state.gl.setClearColor('white', 0)} dpr={window.devicePixelRatio}>
        <PerspectiveCamera makeDefault position={[0, 0, 24]} aspect={16 / 9} />
        {/* lights */}
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[2.5, 12, 12]} intensity={0.5} />
        <pointLight position={[20, 20, 20]} intensity={0.5} />
        <pointLight position={[-20, -20, -20]} intensity={0.5} />
        <Suspense fallback={null}>
          {children}
          {/* Post processing effects */}
          <EffectComposer multisampling={0}>
            <SSAO
              // blendFunction={BlendFunction.SUBTRACT}
              samples={25}
              intensity={40}
              distanceThreshold={1}
              luminanceInfluence={0.9}
              radius={20}
              scale={0.5}
              bias={0.5}
            />
            <SMAA edgeDetectionMode={EdgeDetectionMode.DEPTH} />
          </EffectComposer>
          {/* Gently move camera based on mouse */}
          <Rig />
        </Suspense>
      </Canvas>
    </Container>
  );
};
