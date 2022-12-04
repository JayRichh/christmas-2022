import { createRouter, createWebHistory } from "vue-router";
import GameWindow from "../views/GameWindow.vue";
import SplashScreen from "../views/SplashScreen.vue";

const routes = [
  {
    path: "/",
    name: "Splash",
    component: SplashScreen,
  },
  {
    path: "/game",
    name: "Game",
    component: GameWindow,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
