import App from "./App.vue";
import "./global.css";
import vuetify from "./plugins/vuetify";
import { createApp } from "vue";

createApp(App).use(vuetify).mount("#app");
