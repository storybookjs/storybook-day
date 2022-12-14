import { forwardRef, useMemo } from 'react';
import * as THREE from 'three';
import { Extrude } from '@react-three/drei';

export const SIDE = 0.75;
export const EXTRUDE_SETTINGS = {
  steps: 2,
  depth: SIDE * 0.75,
  bevelEnabled: false
};

export type TetrisBlockType = keyof typeof TYPES;

interface TetrisBlockProps {
  type: TetrisBlockType;
  color: string;
}

export const TetrisBlock = forwardRef<THREE.Mesh, TetrisBlockProps>(
  ({ type, color, ...props }, ref) => {
    const shape = useMemo(() => TYPES[type](), [type]);

    return (
      <Extrude args={[shape, EXTRUDE_SETTINGS]} ref={ref} {...props}>
        <meshStandardMaterial color={color} />
      </Extrude>
    );
  }
);

const TYPES = {
  I: () => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(3 * SIDE, 0);
    _shape.lineTo(3 * SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  },
  L: () => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE * 2, 0);
    _shape.lineTo(SIDE * 2, SIDE);
    _shape.lineTo(SIDE, SIDE);
    _shape.lineTo(SIDE, SIDE * 3);
    _shape.lineTo(0, SIDE * 3);

    return _shape;
  },
  O: () => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  },
  T: () => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 3);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(-SIDE, SIDE * 2);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  },
  Z: () => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }
} as const;
export const tetrisBlockTypes = Object.keys(TYPES) as TetrisBlockType[];
