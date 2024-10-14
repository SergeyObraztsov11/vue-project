<script setup>
import {useTestStore} from "@stores/testStore.js"
const authStore = useTestStore();

</script>

<template>
    <div>
        token: {{authStore.getToken()}}
        <button @click="authStore.logout">Logout</button>
        <router-view />
    </div>
</template>

<style scoped></style>
