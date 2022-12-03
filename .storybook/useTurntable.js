import React from 'react';
import { useFrame } from '@react-three/fiber';

export function useTurntable() {
  const ref = React.useRef(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return ref;
}
