import SceneInitBase from '../Shared/sceneInitBase';

export default class SceneInit extends SceneInitBase {
  constructor(canvasId) {
    super(canvasId, {
      sceneName: 'Vector-1',
      cameraPosition: { x: -40, y: 20, z: 40 },
    });
  }
}
