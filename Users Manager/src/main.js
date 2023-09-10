import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";

import HomePage from "./pages/HomePage.vue";
import UsersPage from "./pages/UsersPage.vue";

const routes = [
  { path: '/', component: HomePage },
  { path: '/users', component: UsersPage },
]

const router = createRouter({
  routes,
  history: createWebHistory()
});

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .mount("#app");