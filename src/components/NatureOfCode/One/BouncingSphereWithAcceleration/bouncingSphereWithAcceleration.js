import { chartGreenHex, chartSurface } from '@site/src/theme/colors';
import { useEffect } from 'react';
import * as THREE from 'three';
import SceneInit from './sceneInit';

const generateSphere = () => {
  const x = Math.random() * 100 - 50;
  const y = Math.random() * 100 - 50;
  const z = Math.random() * 100 - 50;
  const sphereLocationVector = new THREE.Vector3(x, y, z);
  const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: chartGreenHex, roughness: 0 });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.name = 'sphere-acceleration';
  sphere.position.set(sphereLocationVector.x, sphereLocationVector.y, sphereLocationVector.z);
  return sphere;
};

const BouncingSphereWithAcceleration = () => {
  useEffect(() => {
    const canvas = new SceneInit('noc-bouncing-ball-acceleration-canvas-div');
    canvas.initialize();
    const sphere = generateSphere();
    const gridXZ = new THREE.GridHelper(500, 10);
    canvas.scene.add(gridXZ);
    const gridXY = new THREE.GridHelper(500, 10);
    gridXY.rotation.x = Math.PI / 2;
    canvas.scene.add(gridXY);
    const gridYZ = new THREE.GridHelper(500, 10);
    gridYZ.rotation.z = Math.PI / 2;
    canvas.scene.add(gridYZ);
    canvas.scene.add(sphere);
    canvas.animate();
    return () => canvas.dispose();
  }, []);
  return (
    <div
      id={'noc-bouncing-ball-acceleration-canvas-div'}
      style={{
        height: '400px',
        width: '100%',
        backgroundColor: chartSurface,
        position: 'relative',
      }}
    >
      <canvas id={'noc-bouncing-ball-acceleration-canvas'} />
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

export default BouncingSphereWithAcceleration;
