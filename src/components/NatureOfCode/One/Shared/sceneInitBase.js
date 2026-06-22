import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class SceneInitBase {
  constructor(canvasId, { sceneName, cameraPosition }) {
    this.fov = 45;
    this.canvasId = canvasId;
    this.sceneName = sceneName;
    this.cameraPosition = cameraPosition;
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.controls = undefined;
    this.clock = undefined;
    this.ambientLight = undefined;
    this.directionalLight = undefined;
    this.animationFrameId = undefined;
    this.divHTMLElement = document.getElementById(this.canvasId);
    this.canvasHTMLElement = this.divHTMLElement.children[0];
    this.canvasHTMLElement.height = this.divHTMLElement.clientHeight;
    this.canvasHTMLElement.width = this.divHTMLElement.clientWidth;
    this.handleWindowResize = () => this.onWindowResize();
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.scene.name = this.sceneName;
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.divHTMLElement.clientWidth / this.divHTMLElement.clientHeight,
      1,
      1000
    );
    this.camera.position.x = this.cameraPosition.x;
    this.camera.position.y = this.cameraPosition.y;
    this.camera.position.z = this.cameraPosition.z;
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
    window.addEventListener('resize', this.handleWindowResize, false);
  }

  updateScene() {}

  animate() {
    this.animationFrameId = window.requestAnimationFrame(() => this.animate());
    this.updateScene();
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

  dispose() {
    if (this.animationFrameId !== undefined) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.handleWindowResize);
    if (this.controls) {
      this.controls.dispose();
    }
    if (this.scene) {
      this.scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
