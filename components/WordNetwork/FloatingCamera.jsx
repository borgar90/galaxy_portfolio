// components/WordNetwork/FloatingCamera.jsx
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingCamera = () => {
  const { camera } = useThree();
  const tRef = useRef(0);

  useFrame((_, delta) => {
    tRef.current += delta;

    // Sakte flyt fremover + litt bølgende bevegelse
    const x = Math.sin(tRef.current * 0.2) * 1.5;
    const y = Math.sin(tRef.current * 0.3) * 1.2;
    const z = 10 - tRef.current * 0.5; // Sakte fremover

    camera.position.set(x, y, z);
    camera.lookAt(new THREE.Vector3(0, 0, -20)); // Se mot sentrum
  });

  return null;
};

export default FloatingCamera;
