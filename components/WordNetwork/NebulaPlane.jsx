// components/WordNetwork/NebulaPlane.jsx
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

const NebulaPlane = () => {
  const texture = useTexture('/textures/nebula1.jpg');
  const { size, camera } = useThree();

  const aspect = size.width / size.height;
  const height = 25; // juster dette etter hvor høy du vil at nebulaen skal være
  const width = height * aspect;

  return (
    <mesh position={[0, 0, -20]}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

export default NebulaPlane;
