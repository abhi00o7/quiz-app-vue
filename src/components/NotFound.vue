<script setup lang="ts">
// importing props for component
const { msg } = defineProps(["msg"]);
</script>

<template>
  <div class="not-found">
    <h2>{{ msg }}</h2>
  </div>
</template>

<style scoped>
.not-found {
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2 rem;
}
</style>
