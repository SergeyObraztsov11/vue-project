import { ref, computed } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

const URL = "http://localhost:3000";

export const useTestStore = defineStore("test", () => {
    const registrationReq = async ({ login, password }) => {
        const response = await axios.post("/api/register", {
            login,
            password,
        });

        return response;
    };

    const loginReq = async ({ login, password }) => {
        try {
            const response = await axios.post("/api/login", {
                login,
                password,
            });
            localStorage.setItem("token", response.data.token);
        } catch (error) {}
    };

    const logout = () => {
        localStorage.removeItem("token");
    };

    const getToken = () => {
        return localStorage.getItem("token");
    };

    return { loginReq, logout, registrationReq, getToken };
});
