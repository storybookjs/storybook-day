import * as THREE from 'three';
import pack from 'pack-spheres';
import { Float, ContactShadows } from '@react-three/drei';
import * as Random from 'canvas-sketch-util/random';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import { Block, blockTypes } from './Block';
import { VersionText } from './VersionText';
import { Stage } from './Stage';
import { Suspense } from 'react';

interface Sphere {
  position: number[];
  radius: number;
}
const colors = ['#FC521F', '#CA90FF', '#1EA7FD', '#FFAE00', '#37D5D3', '#FC521F', '#66BF3C'];
const size = 5.5;
const scale = [size * 4, size, size];

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
    size: sphere.radius * size, // scale radius to world space
    color: Random.pick(colors),
    type: Random.pick(blockTypes),
    rotation: new THREE.Quaternion(...Random.quaternion())
  };
});

export const BlocksScene = () => {
  return (
    <Stage>
      <Suspense fallback={null}>
        <group position={[0, 0.5, 0]}>
          <VersionText />
          <>
            {blocks.map((block: any) => (
              <Float
                key={block.id}
                position={block.position}
                quaternion={block.rotation}
                speed={1}
                rotationIntensity={2}
                floatIntensity={2}
                floatingRange={[-0.25, 0.25]}
              >
                <Block type={block.type} color={block.color} />
              </Float>
            ))}
          </>
          <ContactShadows
            // frames={1} // if we want static shadows
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -8, 0]}
            opacity={0.75}
            width={20}
            height={10}
            blur={1}
            far={9}
            color="#333"
          />
          <EffectComposer multisampling={0}>
            <DepthOfField focusDistance={0.5} bokehScale={7} focalLength={0.2} />
          </EffectComposer>
        </group>
      </Suspense>
    </Stage>
  );
};
