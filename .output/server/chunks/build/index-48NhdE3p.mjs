import { M as Monument } from './monument_block-lpOxqK7_.mjs';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './patrons-BI7J7TtR.mjs';
import { _ as __nuxt_component_0$1 } from './veterans-CKBoU4jZ.mjs';
import { M as Monument$1 } from './history_monument-DsbRtQPX.mjs';
import { _ as __nuxt_component_5 } from './dead_comrades-DtEqdavl.mjs';
import 'three';
import 'three/examples/jsm/loaders/GLTFLoader.js';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/film.mp4");
const _sfc_main$1 = {
  name: "VideoBlock",
  methods: {
    togglePlay(event) {
      const video = event.target;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "video-container" }, _attrs))} data-v-b1aa22c6><video class="video-element"${ssrRenderAttr("src", _imports_0)} autoplay loop playsinline preload="auto" data-v-b1aa22c6> \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u043E. </video></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/video_block/video_block.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b1aa22c6"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const currentScreen = ref(0);
    const handleSwitchToVideo = () => {
      currentScreen.value = 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_monument_block = Monument;
      const _component_video_block = __nuxt_component_1;
      const _component_patrons = __nuxt_component_0;
      const _component_veterans = __nuxt_component_0$1;
      const _component_history_monument = Monument$1;
      const _component_dead_comrades = __nuxt_component_5;
      _push(`<!--[--><title data-v-e1401373>\u041F\u0430\u043C\u044F\u0442\u043D\u0438\u043A \u043F\u043E\u0436\u0430\u0440\u043D\u044B\u043C-\u0441\u043F\u0430\u0441\u0430\u0442\u0435\u043B\u044F\u043C</title><div data-v-e1401373>`);
      if (currentScreen.value === 0) {
        _push(ssrRenderComponent(_component_monument_block, {
          onSwitchToVideo: handleSwitchToVideo,
          class: "active-screen"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentScreen.value === 1) {
        _push(ssrRenderComponent(_component_video_block, { class: "active-screen" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentScreen.value === 2) {
        _push(ssrRenderComponent(_component_patrons, { class: "active-screen" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentScreen.value === 3) {
        _push(ssrRenderComponent(_component_veterans, { class: "active-screen" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentScreen.value === 4) {
        _push(ssrRenderComponent(_component_history_monument, { class: "active-screen" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (currentScreen.value === 5) {
        _push(ssrRenderComponent(_component_dead_comrades, { class: "active-screen" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e1401373"]]);

export { index as default };
//# sourceMappingURL=index-48NhdE3p.mjs.map
