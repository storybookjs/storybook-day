import * as THREE from 'three';
import pack from 'pack-spheres';
import { Sphere, Center, Edges } from '@react-three/drei';
import * as Random from 'canvas-sketch-util/random';
import { motion } from 'framer-motion-3d';
import { Block, blockTypes } from './Block';
import { VersionText } from './VersionText';
import { Suspense, useEffect, useState } from 'react';
import { colors } from './store';

interface Sphere {
  position: number[];
  radius: number;
}

const size = 5.5;
// const scale = [size * 6, size, size];
const scale = [size * 3, size, size];

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
    position: {
      // initial: sphere.position.map((v: number, idx) => v * size),
      initial: sphere.position.map((v: number, idx) => v * scale[idx]),
      final: [
        sphere.position[0],
        sphere.position[1],
        // sphere.position[2]
        inFront ? sphere.position[2] + 0.6 : sphere.position[2] - 0.6
      ].map((v: number, idx) => v * scale[idx])
    },
    size: sphere.radius * size * 1.5, // scale radius to world space
    color: Random.pick(colors),
    type: Random.pick(blockTypes),
    rotation: new THREE.Quaternion(...Random.quaternion())
  };
});

interface VisualizationSceneProps {
  focusDistance?: number;
  bokehScale?: number;
  focalLength?: number;
  depthOfField?: boolean;
  shadows?: boolean;
  blocks?: boolean;
  text?: boolean;
}

const blockVariants = {
  hidden: { scale: 0 },
  visible: { scale: 0 },
  filled: { scale: 1 },
  spread: { scale: 1 }
};

export const VisualizationScene = ({}: VisualizationSceneProps) => {
  const [variant, setVariant] = useState('filled');

  // useEffect(() => {
  //   setTimeout(() => setVariant('visible'), 600);
  //   setTimeout(() => setVariant('filled'), 3000);
  //   setTimeout(() => setVariant('spread'), 4800);
  // }, []);

  useEffect(() => {
    setTimeout(() => setVariant('spread'), 2400);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <group position={[0, 0.5, 0]}>
          <mesh>
            <boxGeometry args={[size * 2, size * 2, size * 2]} />
            <meshStandardMaterial transparent opacity={0} depthTest={false} />
            <Edges threshold={15} color="#333" />
          </mesh>
          <VersionText />
          {blocks.map((block: any) => (
            <motion.group
              key={block.id}
              quaternion={block.rotation}
              scale={block.size}
              initial="hidden"
              variants={{
                hidden: {
                  x: block.position.initial[0],
                  y: block.position.initial[1],
                  z: block.position.initial[2]
                },
                // filled: { scale: block.size },
                spread: {
                  // scale: block.size,
                  x: block.position.final[0],
                  y: block.position.final[1],
                  z: block.position.final[2]
                }
              }}
              animate={variant}
            >
              <mesh>
                <sphereGeometry args={[1, 32 / 1, 16 / 1]} />
                <motion.meshPhongMaterial
                  color="#333"
                  wireframe={['filled', 'spread'].includes(variant)}
                  transparent
                  initial="hidden"
                  animate={variant}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                    filled: { opacity: 0.1 },
                    spread: { opacity: 0.1 }
                  }}
                  transition={{
                    delay: ['visible', 'filled'].includes(variant) ? 0.01 * block.id : 0
                  }}
                />
              </mesh>
              <motion.group
                initial="hidden"
                animate={variant}
                variants={blockVariants}
                custom={block.size}
                transition={{ delay: variant === 'filled' ? 0.01 * block.id : 0 }}
              >
                <Center>
                  <Block type={block.type} color={block.color} />
                </Center>
              </motion.group>
            </motion.group>
          ))}
        </group>
      </Suspense>
    </>
  );
};
