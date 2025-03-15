import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import UserList from "../views/UserList.vue";
import UserDetails from "../views/UserDetails.vue";
import Login from "../views/Login.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/users", component: UserList, meta: { requiresAuth: true } },
  { path: "/users/:id", component: UserDetails, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  authStore.checkAuth();

  if (to.meta.requiresAuth && !authStore.user) {
    next("/");
  } else {
    next();
  }
});

export default router;
