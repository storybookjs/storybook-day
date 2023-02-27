import * as THREE from 'three';
import { withPrefix } from '@lib/with-prefix';
import { Center, Text3D } from '@react-three/drei';
import { useEffect, useState } from 'react';

const textProps = {
  font: withPrefix('/inter-bold.json'),
  curveSegments: 16,
  size: 10,
  height: 2.5,
  letterSpacing: -1.25,
  bevelEnabled: true,
  bevelSize: 0.04,
  bevelThickness: 0.1,
  bevelSegments: 3
};
const labelProps = {
  ...textProps,
  size: 3,
  letterSpacing: 0
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

function useCountDown(duration: number): [number, number] {
  let timer = duration * 60;
  const [minutes, setMinutes] = useState<number>(duration);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setMinutes(Math.floor(timer / 60));
      setSeconds(timer % 60);

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);

    return () => clearTimeout(id);
  }, []);

  return [minutes, seconds];
}

export const TimerText = () => {
  const [minutes, seconds] = useCountDown(15);

  return (
    // <Center
    //   onCentered={props => console.log(props)}
    //   rotation={[-Math.PI * 0.03125, Math.PI * 0.0625, 0]}
    // >
    <group
      position={[-8.46001049876213, -9.59749986231327, -1.2499999515712261]}
      rotation={[-Math.PI * 0.03125, Math.PI * 0.0625, 0]}
    >
      <Text3D position={[-10, 7, 0]} {...textProps} material={material}>
        {minutes}
      </Text3D>
      <Text3D position={[-6, 2, 0]} {...labelProps} material={material}>
        min
      </Text3D>
      <Text3D position={[10, 7, 0]} {...textProps} material={material}>
        {seconds}
      </Text3D>
      <Text3D position={[15, 2, 0]} {...labelProps} material={material}>
        sec
      </Text3D>
    </group>
    // </Center>
  );
};
