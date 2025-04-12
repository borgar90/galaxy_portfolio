// components/WordNetwork/FloatingSVGLogo.jsx
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { SVGLoader } from 'three-stdlib';
import { Shape, ShapeGeometry, MeshBasicMaterial, Mesh, Group } from 'three';

const FloatingSVGLogo = ({ url, position = [0, 0, 0], scale = 0.015, color = '#00ffff' }) => {
  const groupRef = useRef();
  const { paths } = useLoader(SVGLoader, url);

  const shapes = paths.flatMap((path) => path.toShapes(true));
  const materials = new MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
  });

  const meshes = shapes.map((shape, idx) => (
    <mesh
      key={idx}
      geometry={new ShapeGeometry(shape)}
      material={materials}
    />
  ));

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.position.z = position[2] + Math.sin(t + position[0]) * 0.6;
    groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.5;
  });

  return (
    <group ref={groupRef} position={position} scale={[scale, -scale, scale]}>
      {meshes}
    </group>
  );
};

export default FloatingSVGLogo;
