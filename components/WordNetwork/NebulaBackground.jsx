import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import NebulaFBX from './NebulaFBX';
import FloatingCamera from './FloatingCamera';
import FloatingSVGLogo from './FloatingSVGLogo'; // 👈 Legg til dette
import Stars3D from './Stars3D';
import StarField from './StarField';

const NebulaBackground = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <StarField />
          <Stars3D count={100} size={0.1} speed={0.5} />
          <NebulaFBX />
          <FloatingCamera />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NebulaBackground;
