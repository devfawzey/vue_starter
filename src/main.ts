import "./assets/main.css";

import {createApp} from "vue";
import router from "./router/index.ts"
import uiPlugin from "@nuxt/ui/vue-plugin";

import App from "./App.vue";

const app = createApp(App);

app.use(uiPlugin);
app.use(router);

app.mount("#app");
