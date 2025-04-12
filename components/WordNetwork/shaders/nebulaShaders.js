// Enkel perlin-noise-basert nebula-shader
import * as THREE from 'three';
export const NebulaShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#ff00ff') },
    uOpacity: { value: 0.4 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition;
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uOpacity;
    varying vec2 vUv;

    // Enkelt noise
    float rand(vec2 co){
      return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
    }

    void main() {
      float n = rand(vUv * uTime * 0.1);
      float alpha = smoothstep(0.3, 1.0, n);
      gl_FragColor = vec4(uColor, alpha * uOpacity);
    }
  `
};
