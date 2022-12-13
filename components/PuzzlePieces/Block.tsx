import { Sphere, Cylinder, Torus, Cone, Box } from '@react-three/drei';
import {
  TetrisBlock,
  tetrisBlockTypes,
  TetrisBlockType
} from '@components/PuzzlePieces/TetrisBlock';

const OTHER_TYPES = {
  sphere: { shape: Sphere, args: [0.5, 32, 32] },
  cylinder: { shape: Cylinder, args: [0.5, 0.5, 1, 32] },
  torus: { shape: Torus, args: [0.5, 0.25, 16, 32] },
  cone: { shape: Cone, args: [0.5, 1, 32] },
  box: { shape: Box, args: [1, 1, 1] }
} as const;
export type OtherBlockType = keyof typeof OTHER_TYPES;

export const blockTypes = [
  // ...tetrisBlockTypes,
  'sphere',
  'cylinder',
  'torus',
  'cone',
  'box'
] as OtherBlockType[];

interface BlockProps {
  type: TetrisBlockType | OtherBlockType;
  color: string;
}

export const Block = ({ type, color }: BlockProps) => {
  if (tetrisBlockTypes.includes(type as TetrisBlockType)) {
    return <TetrisBlock type={type as TetrisBlockType} color={color} />;
  } else {
    const Component = OTHER_TYPES[type as OtherBlockType].shape;

    return (
      <group>
        <Component args={OTHER_TYPES[type as OtherBlockType].args as any} castShadow>
          <meshStandardMaterial color={color} />
        </Component>
      </group>
    );
  }
};
