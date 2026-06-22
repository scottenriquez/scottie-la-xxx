import * as THREE from 'three';
import SceneInitBase from '../Shared/sceneInitBase';

export default class SceneInit extends SceneInitBase {
  constructor(canvasId) {
    super(canvasId, {
      sceneName: 'BouncingBall',
      cameraPosition: { x: 100, y: 40, z: 100 },
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

  updateScene() {
    const sphere = this.scene.getObjectByName('sphere');
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
    sphereVelocityVector.multiplyScalar(timeDelta);
    sphereVelocityVector.normalize();
    sphere.position.add(sphereVelocityVector);
  }
}
