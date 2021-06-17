require('./bootstrap');

import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import vuetify from "./vuetify"

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, app, props }) {
    new Vue({
        vuetify,
        render: h => h(app, props),
    }).$mount(el)
  },
});
