import { createWebHistory, createRouter } from "vue-router";
import cardContainer from "../components/CardContainer.vue";
import details from "../components/Details.vue";
import notFound from "../components/notFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: cardContainer },
    { path: "/home/:id", component: details },
    { path: "/:notfound(.*)", component: notFound },
  ],
});

export default router;
