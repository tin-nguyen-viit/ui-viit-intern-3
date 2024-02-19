import Giay from "@/pages/Giay.vue";
import product from "./product";
import Home from "@/pages/Home.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/giay", component: Giay },
  ...product,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
