import { withPrefix } from '@lib/with-prefix';
import { Center, Text3D } from '@react-three/drei';

export const VersionText = () => (
  <Center position={[0, 0, 0]}>
    <Text3D
      font={withPrefix('/inter-bold.json')}
      curveSegments={32}
      size={10}
      height={1}
      bevelEnabled={false}
      letterSpacing={-0.8}
    >
      7.0
      <meshStandardMaterial color={'#333333'} />
    </Text3D>
  </Center>
);
