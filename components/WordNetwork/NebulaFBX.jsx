import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three-stdlib';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const NebulaFBX = () => {
  const meshRef = useRef();

  const model = useLoader(FBXLoader, '/models/nebula.fbx');
  const texture = useLoader(TextureLoader, '/textures/space_nebula_6k.jpg');

  // Legg tekstur til alle mesh-elementer i modellen
  model.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
    }
  });

  // Animer rotasjon og puls
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.01;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.02;

      meshRef.current.traverse((child) => {
        if (child.isMesh && child.material?.opacity !== undefined) {
          child.material.opacity = 0.75 + Math.sin(t * 0.5) * 0.1;
        }
      });
    }
  });

  return (
    <primitive
      object={model}
      ref={meshRef}
      // 📌 Zoomet ut og flyttet til rødlige del
      position={[3, -2.5, -12]} // 🔁 Juster gjerne disse
      scale={0.006} // Zoom ut (0.01 -> 0.006 gir mer rom)
    />
  );
};

export default NebulaFBX;
