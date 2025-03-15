import "./assets/main.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import axios from "axios";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const i18n = createI18n({
  legacy: false, 
  locale: "en",
  messages: {
    en: { message: "Hello" },
    ar: { message: "مرحبا" },
  },
});
app.use(i18n);

app.use(createPinia());
app.use(router);

app.config.globalProperties.$axios = axios;

app.mount("#app");
