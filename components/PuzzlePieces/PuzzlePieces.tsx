import * as THREE from 'three';
import pack from 'pack-spheres';
import { Float, Bounds } from '@react-three/drei';
import * as Random from 'canvas-sketch-util/random';
import { motion } from 'framer-motion-3d';
import { transform } from 'framer-motion';
import { Block, blockTypes } from './Block';
import { VersionText } from './VersionText';
import { Stage } from './Stage';

interface Sphere {
  position: number[];
  radius: number;
}
const colors = ['#FC521F', '#CA90FF', '#1EA7FD', '#FFAE00', '#37D5D3', '#FC521F', '#66BF3C'];
const size = 5;
const scale = [size * 2.5, size, size];

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
      inFront ? sphere.position[2] + 0.5 : sphere.position[2] - 0.5
    ].map((v: number, idx) => v * scale[idx]), // scale position to world space
    size: sphere.radius * size, // scale radius to world space
    color: Random.pick(colors),
    type: Random.pick(blockTypes),
    rotation: new THREE.Quaternion(...Random.quaternion()),
    spin: Random.range(0, 1)
  };
});

// Calculate the range of x values to map to animation delay
const xs = blocks.map((b: any) => b.position[0]);
const xRange = [Math.min(...xs), Math.max(...xs)];

export const PuzzlePieces = () => {
  return (
    <Stage>
      <Bounds observe clip damping={6} margin={1}>
        <group>
          <VersionText />
          <group>
            {blocks.map((block: any) => (
              <Float key={block.id}>
                <motion.group
                  position={block.position}
                  quaternion={block.rotation}
                  initial={{ scale: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }}
                  animate={{
                    scale: block.size,
                    rotateX: block.spin * 3,
                    rotateY: block.spin * 3,
                    rotateZ: block.spin * 3
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + transform(block.position[0], xRange, [0.5, 1])
                  }}
                >
                  <Block type={block.type} color={block.color} />
                </motion.group>
              </Float>
            ))}
          </group>
        </group>
      </Bounds>
    </Stage>
  );
};
