import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Vuetify関連
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const pinia = createPinia();
pinia.use(createPersistedState());
const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
