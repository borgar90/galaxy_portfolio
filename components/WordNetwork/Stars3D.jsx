// components/WordNetwork/Stars3D.jsx
import { useLoader, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const Stars3D = ({ count = 400, radius = 20 }) => {
  const points = useRef();
  const texture = useLoader(THREE.TextureLoader, '/textures/star.png'); // 👉 Bruk din egen glødende stjerne

  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * radius * 2;
      const y = (Math.random() - 0.5) * radius * 2;
      const z = (Math.random() - 0.5) * radius * 2;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, [count, radius]);

  useFrame(({ clock }) => {
    if (points.current) {
      points.current.material.opacity = 0.7 + Math.sin(clock.elapsedTime * 3) * 0.2;

    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starPositions.length / 3}
          array={starPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={1}
        sizeAttenuation
        transparent
        depthWrite={false}
        color={new THREE.Color('#ffffff')}
        alphaTest={0.01}
      />
    </points>
  );
};

export default Stars3D;
