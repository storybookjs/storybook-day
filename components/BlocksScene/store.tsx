import * as THREE from 'three';
THREE.ColorManagement.legacyMode = false;

const colors: string[] = [
  '#FC521F',
  '#CA90FF',
  '#1EA7FD',
  '#FFAE00',
  '#37D5D3',
  '#FC521F',
  '#66BF3C',
  '#0AB94F'
];

interface Materials {
  [color: string]: THREE.MeshPhongMaterial;
}

const materials: Materials = colors.reduce(
  (acc, color) => ({ ...acc, [color]: new THREE.MeshPhongMaterial({ color }) }),
  {}
);

export { colors, materials };
