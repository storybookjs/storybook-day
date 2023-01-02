import type { Meta, StoryObj } from '@storybook/react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls, Plane, Text } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

const DepthOfField = () => (
  <group>
    <Center>
      <Plane args={[8, 8]} position={[0, 0, -10]}>
        <meshBasicMaterial color="#555" side={THREE.DoubleSide} />
      </Plane>
      <Text color="#555" anchorX="center" anchorY="bottom" position={[0, 4.5, -10]} fontSize={1}>
        Camera far plane
      </Text>

      <Plane args={[4, 4]} position={[0, 0, 10]}>
        <meshBasicMaterial color="#555" side={THREE.DoubleSide} />
      </Plane>
      <Text color="#555" anchorX="center" anchorY="bottom" position={[0, 2.5, 10]} fontSize={1}>
        Camera near plane
      </Text>

      <motion.group
        position={[0, 0, 10]}
        initial={{ z: 10, scale: 1 }}
        animate={{ z: -10, scale: 2 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
      >
        <Plane args={[4, 4]}>
          <meshBasicMaterial color="#4e4bec" side={THREE.DoubleSide} />
        </Plane>
      </motion.group>
    </Center>
  </group>
);

const meta: Meta<typeof DepthOfField> = {
  title: 'BlocksScene/DepthOfField',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'blue' }
  },
  component: DepthOfField,
  decorators: [
    storyFn => {
      const nodeRef = useRef();
      useEffect(() => {
        const node = nodeRef.current;

        const controls = animate(0, 1, {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          onUpdate(value) {
            node.textContent = value.toFixed(2);
          }
        });

        return () => controls.stop();
      }, []);

      return (
        <div style={{ height: '75vh', position: 'relative', outline: '1px solid black' }}>
          <Canvas
            shadows
            dpr={window.devicePixelRatio}
            camera={{ position: [15, 10, 20], near: 0.1, far: 1000, fov: 45 }}
          >
            <color attach="background" args={['#E3F3FF']} />
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[2.5, 12, 12]} intensity={1} />
            <pointLight position={[20, 20, 20]} intensity={1} />
            <pointLight position={[-20, -20, -20]} intensity={1} />
            <OrbitControls />
            {storyFn()}
          </Canvas>
          <div
            style={{
              position: 'absolute',
              right: '30%',
              bottom: '5%',
              fontSize: 24,
              fontWeight: 600,
              color: '#555'
            }}
          >
            Focus Distance:{' '}
            <span style={{ fontFamily: 'menlo' }} ref={nodeRef}>
              1
            </span>
          </div>
        </div>
      );
    }
  ]
};
export default meta;
type Story = StoryObj<typeof DepthOfField>;

export const Default: Story = {};
