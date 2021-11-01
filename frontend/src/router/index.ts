import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Kekkahappyo from "@/components/pages/Kekkahappyo.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "result",
    component: Kekkahappyo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
