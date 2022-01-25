import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store.js";

const myApp = createApp(App);

myApp.use(store);

myApp.use(router);

myApp.mount("#app");
