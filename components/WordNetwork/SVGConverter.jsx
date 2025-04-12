import { useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { useEffect, useState } from 'react';
import * as THREE from 'three';

const useSVGTexture = (url) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new SVGLoader();
    loader.load(url, (data) => {
      const svgGroup = new THREE.Group();
      const paths = data.paths;

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const material = new THREE.MeshBasicMaterial({
          color: path.color || '#ffffff',
          side: THREE.DoubleSide,
          depthWrite: false,
        });

        const shapes = SVGLoader.createShapes(path);
        for (let j = 0; j < shapes.length; j++) {
          const geometry = new THREE.ShapeGeometry(shapes[j]);
          const mesh = new THREE.Mesh(geometry, material);
          svgGroup.add(mesh);
        }
      }

      const svgScene = new THREE.Scene();
      svgScene.add(svgGroup);

      const camera = new THREE.OrthographicCamera(-200, 200, 200, -200, 1, 1000);
      camera.position.z = 10;

      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(512, 512);

      renderer.render(svgScene, camera);
      const canvas = renderer.domElement;
      const texture = new THREE.CanvasTexture(canvas);
      setTexture(texture);
    });
  }, [url]);

  return texture;
};
