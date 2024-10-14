<script setup>
import { useTestStore } from "@stores/testStore.js";
import {  ref } from "vue";
const authStore = useTestStore();
const token = ref(null)
</script>

<template>
    <div>
        <h1 v-if="token">token: {{ authStore.getToken() }}</h1>
        <h1 v-else>О, нет 😢</h1>

        <button @click="authStore.logout">Logout</button>
        <router-view />
    </div>
</template>

<style scoped></style>
