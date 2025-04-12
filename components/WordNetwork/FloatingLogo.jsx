// components/WordNetwork/FloatingLogo.jsx
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const FloatingLogo = ({ textureUrl, position = [0, 0, 0], scale = 1 }) => {
  const ref = useRef();
  const texture = useLoader(TextureLoader, textureUrl);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.z = position[2] + Math.sin(t * 2 + position[0]) * 0.5;
    ref.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    ref.current.rotation.x = Math.cos(t * 0.5) * 0.2;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <planeGeometry args={[1.8, 1.8]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={1}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default FloatingLogo;
