'use strict';

var vue = require('vue');
var vueRouter = require('vue-router');

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  name: "index",
  props: {
    type: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", null, "btn");
    };
  }
});
var Button$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "index.vue"]]);

const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createVNode(Button$1, { type: "primary" })
      ]);
    };
  }
});
var Index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "index.vue"]]);

var routes = [
    {
        path: '/',
        component: Index
    }
];
var router = vueRouter.createRouter({
    history: vueRouter.createWebHistory('/'),
    routes: routes
});

var install$1 = function (app) {
    app.component('Button', Button$1);
};
var Button = {
    install: install$1
};

var list = [
    Button
];
var install = function (app) {
    list.forEach(function (item) {
        app.use(item);
    });
};
var UI = {
    install: install
};

function render(_ctx, _cache) {
  const _component_router_view = vue.resolveComponent("router-view");

  return (vue.openBlock(), vue.createBlock(_component_router_view))
}

const _sfc_main = {};
var Main = /*#__PURE__*/_export_sfc(_sfc_main, [['render',render],['__scopeId',"data-v-666b8d2c"],['__file',"app.vue"]]);

var app = vue.createApp(Main);
app.use(router);
app.use(UI);
app.mount('#app');
