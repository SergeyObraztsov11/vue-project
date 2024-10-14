<script setup>
import { ref } from "vue";
import { useTestStore } from "@stores/testStore.js";

const authStore = useTestStore();
const loginValue = ref("");
const passwordValue = ref("");

const submitForm = async () => {
    await authStore.loginReq({
        login: loginValue.value,
        password: passwordValue.value,
    });
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <h3>Авторизация</h3>
        <input type="text" placeholder="Логин" v-model="loginValue" />
        <input type="password" placeholder="Пароль" v-model="passwordValue" />
        <button type="submit">Войти</button>
    </form>
</template>

<style scoped></style>
