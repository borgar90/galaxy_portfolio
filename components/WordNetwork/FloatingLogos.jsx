// components/WordNetwork/FloatingLogos.jsx
import React, { useMemo, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const logoPaths = [
  { src: '/logos/react.svg', color: '#00d8ff' },
  { src: '/logos/javascript.svg', color: '#f7df1e' },
  { src: '/logos/typescript.svg', color: '#007acc' },
  { src: '/logos/python.svg', color: '#3776ab' },
  { src: '/logos/ruby.svg', color: '#cc0000' },
  { src: '/logos/rails.svg', color: '#d30000' },
  { src: '/logos/java.svg', color: '#f89820' },
];

const FloatingLogos = () => {
  const groupRef = useRef();

  const textures = useLoader(THREE.TextureLoader, logoPaths.map(l => l.src));

  const logos = useMemo(() => {
    return textures.map((tex, index) => {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 25;
      const scale = 1.5;
      return { tex, position: [x, y, z], scale, color: logoPaths[index].color };
    });
  }, [textures]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.02;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {logos.map((logo, i) => (
        <mesh key={i} position={logo.position} scale={[logo.scale, logo.scale, 1]}>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial
            map={logo.tex}
            transparent
            side={THREE.DoubleSide}
            opacity={0.85}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingLogos;
