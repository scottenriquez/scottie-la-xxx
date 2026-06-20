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
    this.acceleration = 9.8;
    this.bounceDistance = 9;
    this.bottomYPosition = -4;
    this.timeStep = 0.2;
    this.timeCounter = Math.sqrt((this.bounceDistance * 2) / this.acceleration);
    this.initialSpeed = this.timeCounter * this.acceleration;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.scene.name = 'Vector-1';
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.divHTMLElement.clientWidth / this.divHTMLElement.clientHeight,
      1,
      1000
    );
    this.camera.position.x = -40;
    this.camera.position.y = 20;
    this.camera.position.z = 40;
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

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
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
