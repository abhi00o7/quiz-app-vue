<script setup>
import { defineProps } from "vue";

const { msg } = defineProps(["msg"]);
</script>

<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>
