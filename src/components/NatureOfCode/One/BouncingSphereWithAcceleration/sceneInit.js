import * as THREE from 'three';
import SceneInitBase from '../Shared/sceneInitBase';

export default class SceneInit extends SceneInitBase {
  constructor(canvasId) {
    super(canvasId, {
      sceneName: 'BouncingBallWithAcceleration',
      cameraPosition: { x: 300, y: 300, z: 300 },
    });
    this.bottomXPosition = -50;
    this.bottomYPosition = -50;
    this.bottomZPosition = -50;
    this.topXPosition = 50;
    this.topYPosition = 50;
    this.topZPosition = 50;
    this.isXPositiveDirection = true;
    this.isYPositiveDirection = true;
    this.isZPositiveDirection = true;
  }

  generateVelocityVector() {
    const x = (this.isXPositiveDirection ? 1 : -1) * 15;
    const y = (this.isYPositiveDirection ? 1 : -1) * 15;
    const z = (this.isZPositiveDirection ? 1 : -1) * 15;
    return new THREE.Vector3(x, y, z);
  }

  generateRandomAccelerationVector() {
    const x = Math.random() * 30 - 15;
    const y = Math.random() * 30 - 15;
    const z = Math.random() * 30 - 15;
    return new THREE.Vector3(x, y, z);
  }

  updateScene() {
    const sphere = this.scene.getObjectByName('sphere-acceleration');
    if (sphere.position.x > this.topXPosition || sphere.position.x < this.bottomXPosition) {
      this.isXPositiveDirection = !this.isXPositiveDirection;
    }
    if (sphere.position.y > this.topYPosition || sphere.position.y < this.bottomYPosition) {
      this.isYPositiveDirection = !this.isYPositiveDirection;
    }
    if (sphere.position.z > this.topZPosition || sphere.position.z < this.bottomZPosition) {
      this.isZPositiveDirection = !this.isZPositiveDirection;
    }
    const timeDelta = this.clock.getDelta();
    const sphereVelocityVector = this.generateVelocityVector();
    const sphereAccelerationVector = this.generateRandomAccelerationVector();
    sphereVelocityVector.multiplyScalar(timeDelta);
    sphereVelocityVector.add(sphereAccelerationVector);
    sphereVelocityVector.normalize();
    sphere.position.add(sphereVelocityVector);
  }
}
