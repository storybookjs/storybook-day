import * as THREE from 'three';
import pack from 'pack-spheres';
import { Float, ContactShadows } from '@react-three/drei';
import * as Random from 'canvas-sketch-util/random';
import { OrbitControls, PerspectiveCamera, Sphere } from '@react-three/drei';
import { EffectComposer, SSAO, SMAA, DepthOfField } from '@react-three/postprocessing';
import { EdgeDetectionMode, BlendFunction } from 'postprocessing';
import { Block, blockTypes } from './Block';
import { VersionText } from './VersionText';
import { Stage } from './Stage';
import { useControls } from 'leva';
import { useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

interface Sphere {
  position: number[];
  radius: number;
}
const colors = ['#FC521F', '#CA90FF', '#1EA7FD', '#FFAE00', '#37D5D3', '#FC521F', '#66BF3C'];
const size = 5 * 1.1;
const scale = [size * 5, size, size];

// Generate a blocks using sphere packing algorithm
const blocks = pack({
  maxCount: 80,
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
      inFront ? sphere.position[2] + 0.5 : sphere.position[2] - 0.5
    ].map((v: number, idx) => v * scale[idx]), // scale position to world space
    size: sphere.radius * size, // scale radius to world space
    color: Random.pick(colors),
    type: Random.pick(blockTypes),
    rotation: new THREE.Quaternion(...Random.quaternion())
  };
});

export const PuzzlePieces = () => {
  return (
    <Stage>
      <Suspense fallback={null}>
        <group position={[0, 1, 0]}>
          <group>
            <VersionText />
            <group>
              {blocks.map((block: any) => (
                <Float key={block.id}>
                  <group position={block.position} quaternion={block.rotation}>
                    <Block type={block.type} color={block.color} />
                  </group>
                </Float>
              ))}
            </group>
          </group>
          <ContactShadows
            frames={1}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -7, 0]}
            opacity={0.75}
            width={20}
            height={10}
            blur={1}
            far={9}
            color="#333"
          />
          <EffectComposer multisampling={0}>
            <DepthOfField focusRange={0.15} focusDistance={0.5} bokehScale={7} focalLength={0.2} />
            <SSAO
              samples={25}
              intensity={40}
              luminanceInfluence={0.5}
              radius={10}
              scale={0.5}
              bias={0.5}
            />
            <SMAA edgeDetectionMode={EdgeDetectionMode.DEPTH} />
          </EffectComposer>
        </group>
      </Suspense>
    </Stage>
  );
};
