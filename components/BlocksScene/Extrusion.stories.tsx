import type { Meta, StoryObj } from '@storybook/react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { TetrisBlock } from './TetrisBlock';

extend({ MeshLineGeometry, MeshLineMaterial });

const SIDE = 5;
// prettier-ignore
const shape = [
  0, 0, 0,
  SIDE, 0, 0,
  SIDE, SIDE * 1, 0,
  SIDE, SIDE * 2, 0,
  SIDE, SIDE * 3, 0,
  0, SIDE * 3, 0,
  0, SIDE * 2, 0,
  -SIDE, SIDE * 2, 0,
  -SIDE, SIDE, 0,
  0, SIDE, 0,
  0, 0, 0,
];

let scale = 0;

const Extrusion = () => {
  const ref = useRef();
  const shapeRef = useRef();
  const [state, setState] = useState('idle');

  useFrame(() => {
    if (state === 'idle') return;

    if (ref.current.material.dashRatio > 0) {
      ref.current.material.dashRatio -= 0.01;
    } else if (state === 'draw_line') {
      setState('scale');
    }

    if (state === 'scale' && shapeRef.current) {
      shapeRef.current.material.opacity = 1;

      if (scale < 10) {
        scale += 0.2;
      }
      shapeRef.current.scale.set(10, 10, scale);
    }
  });

  useEffect(() => {
    scale = 0;
    setTimeout(() => setState('draw_line'), 1000);
  }, []);

  return (
    <group>
      <Center>
        <mesh ref={ref}>
          <meshLineGeometry points={shape} />
          <meshLineMaterial
            transparent
            lineWidth={0.3}
            color="#0AB94F"
            depthWrite={false}
            dashArray={1}
            dashRatio={1}
            sizeAttenuation={1}
            toneMapped={false}
          />
        </mesh>
        {state === 'scale' && (
          <TetrisBlock ref={shapeRef} scale={[10, 10, 0]} type="T" color="#66BF3C" />
        )}
      </Center>
    </group>
  );
};

const meta: Meta<typeof Extrusion> = {
  title: 'BlocksScene/Extrusion',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'blue' }
  },
  component: Extrusion,
  argTypes: {
    dashArray: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    dashRatio: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    dashOffset: { control: { type: 'range', min: 0, max: 1, step: 0.01 } }
  },
  args: {
    dashArray: 0.1,
    dashRatio: 0.1,
    dashOffset: 1
  },
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
        <div style={{ height: '75vh', position: 'relative' }}>
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
        </div>
      );
    }
  ]
};
export default meta;
type Story = StoryObj<typeof Extrusion>;

export const Default: Story = {};
