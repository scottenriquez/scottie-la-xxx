import { chartGreenHex, chartSurface } from '@site/src/theme/colors';
import { useEffect } from 'react';
import * as THREE from 'three';
import SceneInit from './sceneInit';

const generateLine = (vectors) => {
  const material = new THREE.LineBasicMaterial({ color: chartGreenHex });
  const geometry = new THREE.BufferGeometry().setFromPoints(vectors);
  return new THREE.Line(geometry, material);
};

const Vector = () => {
  useEffect(() => {
    const canvas = new SceneInit('noc-vector-1-canvas-div');
    canvas.initialize();
    const vectors = [new THREE.Vector3(-10, -10, -10), new THREE.Vector3(10, 10, 10)];
    const line = generateLine(vectors);
    canvas.scene.add(line);
    const gridXZ = new THREE.GridHelper(100, 10);
    canvas.scene.add(gridXZ);
    const gridXY = new THREE.GridHelper(100, 10);
    gridXY.rotation.x = Math.PI / 2;
    canvas.scene.add(gridXY);
    const gridYZ = new THREE.GridHelper(100, 10);
    gridYZ.rotation.z = Math.PI / 2;
    canvas.scene.add(gridYZ);
    canvas.animate();
  }, []);
  return (
    <div
      id={'noc-vector-1-canvas-div'}
      style={{
        height: '400px',
        width: '100%',
        backgroundColor: chartSurface,
        position: 'relative',
      }}
    >
      <canvas id={'noc-bouncing-vector-1-canvas'} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.9) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default Vector;
