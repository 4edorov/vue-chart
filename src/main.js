import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import Vue2OrgTree from "vue2-org-tree";

Vue.use(Vue2OrgTree);

new Vue({
  render: h => h(App)
}).$mount("#app");
