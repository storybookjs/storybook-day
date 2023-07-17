import * as THREE from 'three';
import { withPrefix } from '@lib/with-prefix';
import { Center, Text3D } from '@react-three/drei';

const textProps = {
  font: withPrefix('/inter-bold.json'),
  curveSegments: 16,
  size: 10,
  height: 2.5,
  letterSpacing: -3.25,
  bevelEnabled: true,
  bevelSize: 0.04,
  bevelThickness: 0.1,
  bevelSegments: 3
};

const material = new THREE.MeshPhysicalMaterial({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  thickness: 20,
  roughness: 0.8,
  clearcoat: 0.9,
  clearcoatRoughness: 0.8,
  transmission: 0.9,
  ior: 1.25,
  envMapIntensity: 0,
  color: '#0aff4f'
});

export const VersionText = ({major = '7', minor = '0'}) => (
  <Center rotation={[-Math.PI * 0.03125, Math.PI * 0.0625, 0]}>
    <Text3D position={[-4, 0, 0]} {...textProps} material={material}>
      {major}.
    </Text3D>
    <Text3D position={[4, 0, 0]} {...textProps} material={material}>
      {minor}
    </Text3D>
  </Center>
);
