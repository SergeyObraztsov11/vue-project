import { createRouter, createWebHistory } from "vue-router";
import AutorisationPage from "./pages/AutorisationPage.vue";
import RegistrationPage from "./pages/RegistrationPage.vue";
import MainPage from "./pages/MainPage.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: MainPage,
    },
    {
        path: "/auth",
        name: "Auth",
        component: AutorisationPage,
    },
    {
        path: "/registration",
        name: "Registration",
        component: RegistrationPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
