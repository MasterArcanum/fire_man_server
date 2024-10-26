import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  data() {
    return {
      alphabet: "\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042D\u042E\u042F".split(""),
      veterans: {
        \u0410: [
          "\u0410\u043D\u0442\u043E\u043D\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0412\u0438\u0442\u0430\u043B\u044C\u0435\u0432\u0438\u0447",
          "\u0410\u0447\u043A\u0430\u0441\u043E\u0432 \u0412\u0430\u043B\u0435\u0440\u0438\u0439 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447"
        ],
        \u0411: [
          "\u0411\u0430\u0443\u0440\u0438\u043D \u042E\u0440\u0438\u0439 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447",
          "\u0411\u0443\u0434\u0430\u0435\u0432 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432\u0438\u0447",
          "\u0411\u044B\u043A\u043E\u0432\u0441\u043A\u0438\u0445 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447"
        ],
        \u0412: [
          "\u0412\u043E\u043B\u043A\u043E\u0432 \u042E\u0440\u0438\u0439 \u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432\u0438\u0447",
          "\u0412\u043E\u043B\u043E\u043A\u0438\u0442\u0438\u043D \u041C\u0438\u0445\u0430\u0438\u043B \u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432\u0438\u0447"
        ],
        \u0413: [
          "\u0413\u043E\u0432\u043E\u0440\u0443\u0445\u0438\u043D \u042E\u0440\u0438\u0439 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447"
        ],
        \u0414: [
          "\u0414\u043E\u0431\u0440\u0438\u043D\u0441\u043A\u0438\u0445 \u041F\u0435\u0442\u0440 \u041A\u0443\u0437\u044C\u043C\u0438\u0447",
          "\u0414\u0440\u0443\u0436\u0438\u043D\u0438\u043D \u0418\u0433\u043E\u0440\u044C \u041C\u0438\u0445\u0430\u0439\u043B\u043E\u0432\u0438\u0447"
        ],
        \u0415: [
          "\u0415\u0432\u0441\u044E\u043A\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0438\u0447"
        ],
        \u041B: [
          "\u041B\u0443\u043F\u043E\u043D\u043E\u0441\u043E\u0432 \u0410\u043D\u0430\u0442\u043E\u043B\u0438\u0439 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0438\u0447",
          "\u041B\u0443\u043F\u043E\u043D\u043E\u0441\u043E\u0432 \u0418\u0432\u0430\u043D \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0438\u0447"
        ],
        \u041C: [
          "\u041C\u0430\u043A\u0441\u0438\u043C\u043E\u0432 \u041E\u043B\u0435\u0433 \u0412\u0438\u0442\u0430\u043B\u044C\u0435\u0432\u0438\u0447",
          "\u041C\u043E\u0440\u043E\u0437\u043E\u0432 \u041C\u0438\u0445\u0430\u0438\u043B \u041B\u0438\u0432\u0435\u0440\u044C\u0435\u0432\u0438\u0447"
        ],
        \u041F: [
          "\u041F\u043E\u0440\u044F\u0434\u0438\u043D \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0438\u0447"
        ],
        \u0421: [
          "\u0421\u0430\u043F\u0440\u0438\u043D \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041F\u0435\u0442\u0440\u043E\u0432\u0438\u0447",
          "\u0421\u0434\u0432\u0438\u0436\u043A\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0438\u0447",
          "\u0421\u0438\u043C\u0432\u043E\u043B\u043E\u043A\u043E\u0432 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u043E\u0432\u0438\u0447",
          "\u0421\u043A\u043E\u043A\u043E\u0432 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432\u0438\u0447"
        ],
        \u0428: [
          "\u0428\u0443\u043B\u044C\u0433\u0438\u043D \u0418\u0433\u043E\u0440\u044C \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432\u0438\u0447"
        ]
      },
      activeLetter: null,
      showModal: false
    };
  },
  computed: {
    filteredAlphabet() {
      return this.alphabet.filter((letter) => this.veterans[letter] && this.veterans[letter].length > 0);
    }
  },
  methods: {
    openModal(letter) {
      this.activeLetter = letter;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.activeLetter = null;
    },
    getNamesByLetter(letter) {
      return this.veterans[letter] || [];
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center w-full h-screen p-4 relative" }, _attrs))} data-v-835b676e><h1 class="text-white text-4xl mt-20 absolute top-4" data-v-835b676e>\u041D\u0430\u0448\u0438 \u0432\u0435\u0442\u0435\u0440\u0430\u043D\u044B</h1><div class="grid-container text-black" data-v-835b676e><!--[-->`);
  ssrRenderList($options.filteredAlphabet, (letter) => {
    _push(`<div class="letter-card" data-v-835b676e><div class="letter" data-v-835b676e>${ssrInterpolate(letter)}</div></div>`);
  });
  _push(`<!--]--></div>`);
  if ($data.showModal) {
    _push(`<div class="modal-overlay" data-v-835b676e><div class="modal" data-v-835b676e><ul data-v-835b676e><!--[-->`);
    ssrRenderList($options.getNamesByLetter($data.activeLetter), (name) => {
      _push(`<li data-v-835b676e>${ssrInterpolate(name)}</li>`);
    });
    _push(`<!--]--></ul><button class="close-button" data-v-835b676e>\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/veterans/veterans.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-835b676e"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=veterans-CKBoU4jZ.mjs.map
