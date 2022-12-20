import * as THREE from 'three';
import pack from 'pack-spheres';
import { Float, ContactShadows } from '@react-three/drei';
import * as Random from 'canvas-sketch-util/random';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import { Block, blockTypes } from './Block';
import { VersionText } from './VersionText';
import { Stage } from './Stage';
import { Suspense, useEffect, useState } from 'react';
import { colors } from './store';
import { useThree } from '@react-three/fiber';

interface Sphere {
  position: number[];
  radius: number;
}

const size = 5.5;
const scale = [size * 6, size, size];

// Generate a blocks using sphere packing algorithm
const blocks = pack({
  maxCount: 40,
  minRadius: 0.125,
  maxRadius: 0.25
}).map((sphere: Sphere, index: number) => {
  const inFront = sphere.position[2] >= 0;

  return {
    ...sphere,
    id: index,
    position: [
      sphere.position[0],
      sphere.position[1],
      // shift the blocks to avoid overlapping with 7.0
      inFront ? sphere.position[2] + 0.6 : sphere.position[2] - 0.6
    ].map((v: number, idx) => v * scale[idx]), // scale position to world space
    size: sphere.radius * size * 1.5, // scale radius to world space
    color: Random.pick(colors),
    type: Random.pick(blockTypes),
    rotation: new THREE.Quaternion(...Random.quaternion())
  };
});

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

interface BlocksSceneProps {
  focusDistance?: number;
  bokehScale?: number;
  focalLength?: number;
}

export const BlocksScene = ({
  focusDistance = 0.5,
  bokehScale = 7,
  focalLength = 0.2
}: BlocksSceneProps) => {
  const [frameLoop, setFrameLoop] = useState<'demand' | 'always'>('always');

  return (
    <Stage frameLoop={frameLoop}>
      <LoopControl setFrameLoop={setFrameLoop} />
      <Suspense fallback={null}>
        <group position={[0, 0.5, 0]}>
          <VersionText />
          {blocks.map((block: any) => (
            <Float
              key={block.id}
              position={block.position}
              quaternion={block.rotation}
              scale={block.size}
              speed={1}
              rotationIntensity={frameLoop === 'demand' ? 0 : 2}
              floatIntensity={frameLoop === 'demand' ? 0 : 2}
              floatingRange={[-0.25, 0.25]}
            >
              <Block type={block.type} color={block.color} />
            </Float>
          ))}
          <ContactShadows
            position={[0, -8, 0]}
            opacity={0.75}
            width={20}
            height={10}
            blur={1}
            far={9}
            color="#333"
            resolution={256}
          />
          <EffectComposer multisampling={8}>
            <DepthOfField
              focusDistance={focusDistance}
              bokehScale={bokehScale}
              focalLength={focalLength}
            />
          </EffectComposer>
        </group>
      </Suspense>
    </Stage>
  );
};
