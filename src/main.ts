import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "@ionic/vue/css/ionic.bundle.css";

import { IonicVue } from "@ionic/vue";
/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "./theme/override-vuetify.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/use-tailwind.css";
import "./theme/xbase.css";
import "animate.css";
import "./theme/new-design-styles.css";
import '@vuepic/vue-datepicker/dist/main.css'

// alternatively, use `window.__TAURI__.shell.Command`
// `binaries/my-sidecar` is the EXACT value specified on `tauri.conf.json > tauri > bundle > externalBin`
// const command = Command.sidecar("binaries/nodejs");
// const output = await command.execute();

const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp(App).use(pinia).use(vuetify).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount("#app");
});
