import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "MonumentBlock",
  mounted() {
    this.initThreeJS();
  },
  methods: {
    initThreeJS() {
      const modelContainer = this.$refs.modelContainer;
      const container = this.$refs.container;
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(932474);
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1e3);
      camera.position.z = 5;
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      modelContainer.appendChild(renderer.domElement);
      const light = new THREE.DirectionalLight(10714697, 1.2);
      light.position.set(0, 1, 1).normalize();
      scene.add(light);
      const beaconLight = new THREE.PointLight(16711680, 1, 10);
      beaconLight.position.set(2, 1, 0);
      scene.add(beaconLight);
      let model;
      const loader = new GLTFLoader();
      loader.load("fireman.glb", (gltf) => {
        model = gltf.scene;
        model.position.y = -2.2;
        model.position.x = -0.4;
        model.scale.set(1.5, 1.5, 1.5);
        scene.add(model);
        this.setSize();
      });
      let clock = new THREE.Clock();
      const animate = () => {
        requestAnimationFrame(animate);
        if (model) {
          model.rotation.y += 3e-4;
        }
        const elapsed = clock.getElapsedTime();
        beaconLight.intensity = Math.abs(Math.sin(elapsed * 5)) * 2;
        renderer.render(scene, camera);
      };
      animate();
      this.setSize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight || 600;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      const setFullscreenSize = () => {
        const width = (void 0).innerWidth;
        const height = (void 0).innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      (void 0).addEventListener("resize", () => {
        if ((void 0).fullscreenElement) {
          setFullscreenSize();
        } else {
          this.setSize();
        }
      });
      container.addEventListener("dblclick", () => {
        if (!(void 0).fullscreenElement) {
          container.requestFullscreen().catch((err) => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
          }).then(() => {
            camera.position.z = 5;
            setFullscreenSize();
          });
        } else {
          (void 0).exitFullscreen().then(() => {
            camera.position.z = 5;
            this.setSize();
          });
        }
      });
      const handleFullscreenChange = () => {
        if ((void 0).fullscreenElement) {
          setFullscreenSize();
        } else {
          camera.position.z = 5;
          this.setSize();
        }
      };
      (void 0).addEventListener("fullscreenchange", handleFullscreenChange);
      (void 0).addEventListener("webkitfullscreenchange", handleFullscreenChange);
      (void 0).addEventListener("mozfullscreenchange", handleFullscreenChange);
      (void 0).addEventListener("msfullscreenchange", handleFullscreenChange);
    },
    handleModelClick() {
      this.$emit("switchToVideo");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "3d-model-container",
    ref: "container",
    class: "flex items-center justify-center w-full h-screen bg-gray-900"
  }, _attrs))} data-v-0f1025e7><div id="3d-model" data-v-0f1025e7></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/monument_block/monument_block.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Monument = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0f1025e7"]]);

export { Monument as M };
//# sourceMappingURL=monument_block-lpOxqK7_.mjs.map
