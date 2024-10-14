<script setup>
import { ref } from "vue";
import {useTestStore} from "@stores/testStore.js"

const authStore = useTestStore();
const loginValue = ref("");
const passwordValue = ref("");

const submitForm = async () => {
    if (loginValue.value.length >= 8 && passwordValue.value.length >= 8) {
        await authStore.registrationReq({
            login: loginValue.value,
            password: passwordValue.value
        });
        alert("Успешная регистрация")
    }
    else {
        alert("Ошибка")
    }
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <h3>Регистрация</h3>
        <input type="text" placeholder="Логин" v-model="loginValue" />
        <input type="password" placeholder="Пароль" v-model="passwordValue" />
        <button type="submit">Зарегистрироваться</button>
    </form>
</template>

<style scoped></style>
