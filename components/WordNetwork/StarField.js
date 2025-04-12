// components/WordNetwork/StarField.jsx
import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const StarField = ({ count = 200 }) => {
  const texture = useLoader(THREE.TextureLoader, '/textures/star.png');

  // 📍 Generer tilfeldig posisjonerte stjerner én gang
  const stars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 50;
      const scale = Math.random() * 0.8 + 0.2;
      temp.push({ position: [x, y, z], scale });
    }
    return temp;
  }, [count]);

  return (
    <>
      {stars.map((star, i) => (
        <sprite key={i} position={star.position} scale={[star.scale, star.scale, star.scale]}>
          <spriteMaterial
            map={texture}
            color={new THREE.Color(['#ffffff', '#00ffff', '#ff00ff'][i % 3])}
            blending={THREE.AdditiveBlending}
            transparent
            depthWrite={false}
            opacity={0.8}
          />
        </sprite>
      ))}
    </>
  );
};

export default StarField;
