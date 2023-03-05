<script setup>
import { RouterLink } from "vue-router";

const { correctAnswers, totalQuestions } = defineProps([
  "correctAnswers",
  "totalQuestions",
]);
</script>

<template>
  <div class="results">
    <p>Your results...</p>
    <h1>{{ correctAnswers }}/{{ totalQuestions }}</h1>
    <h2>
      you have scored {{ Math.round((correctAnswers / totalQuestions) * 100) }}%
    </h2>
    <RouterLink class="next-button" to="/">Take another quiz</RouterLink>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 150px 0;
}

p {
  font-size: 2rem;
}

h1 {
  font-size: 5rem;
}
</style>
