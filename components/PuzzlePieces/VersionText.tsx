import { withPrefix } from '@lib/with-prefix';
import { Center, Text3D } from '@react-three/drei';
import { useControls } from 'leva';

const textProps = {
  font: withPrefix('/inter-bold.json'),
  curveSegments: 32,
  size: 10,
  height: 2.5,
  // bevelEnabled: false,
  letterSpacing: -3.25,
  bevelEnabled: true,
  bevelSize: 0.04,
  bevelThickness: 0.1,
  bevelSegments: 10
};

const materialProps = {
  thickness: 20,
  roughness: 0.8,
  clearcoat: 1,
  clearcoatRoughness: 0.8,
  transmission: 1,
  ior: 1.25,
  envMapIntensity: 0,
  color: '#0aff4f'
};

export const VersionText = () => (
  <Center position={[0, 0, 0]}>
    <Text3D position={[-4, 0, 0]} {...textProps}>
      7.
      <meshPhysicalMaterial {...materialProps} />
    </Text3D>
    <Text3D position={[4, 0, 0]} {...textProps}>
      0
      <meshPhysicalMaterial {...materialProps} />
    </Text3D>
  </Center>
);
