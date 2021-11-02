import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Kekkahappyo from "@/components/pages/Kekkahappyo.vue";
import Addmin from "@/components/pages/Admmin.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "result",
    component: Kekkahappyo,
  },
  {
    path: "/addmin",
    name: "addmin",
    component: Addmin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
