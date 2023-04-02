<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="container">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1080px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
