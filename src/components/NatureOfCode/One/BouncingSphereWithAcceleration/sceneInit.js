import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class SceneInit {
  constructor(canvasId) {
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.fov = 45;
    this.canvasId = canvasId;
    this.stats = undefined;
    this.controls = undefined;
    this.ambientLight = undefined;
    this.directionalLight = undefined;
    this.divHTMLElement = document.getElementById(this.canvasId);
    this.canvasHTMLElement = this.divHTMLElement.children[0];
    this.canvasHTMLElement.height = this.divHTMLElement.clientHeight;
    this.canvasHTMLElement.width = this.divHTMLElement.clientWidth;
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

  initialize() {
    this.scene = new THREE.Scene();
    this.scene.name = 'BouncingBallWithAcceleration';
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.divHTMLElement.clientWidth / this.divHTMLElement.clientHeight,
      1,
      1000
    );
    this.camera.position.x = 300;
    this.camera.position.y = 300;
    this.camera.position.z = 300;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasHTMLElement,
      antialias: true,
    });
    this.renderer.setSize(this.divHTMLElement.clientWidth, this.divHTMLElement.clientHeight);
    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);
    window.addEventListener('resize', () => this.onWindowResize(), false);
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

  animate() {
    const sphere = this.scene.getObjectByName('sphere-acceleration');
    window.requestAnimationFrame(this.animate.bind(this));
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
    this.render();
    this.controls.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = this.divHTMLElement.clientWidth / this.divHTMLElement.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.divHTMLElement.clientWidth, this.divHTMLElement.clientHeight);
  }
}
