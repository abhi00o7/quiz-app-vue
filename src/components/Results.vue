<script setup>
import { RouterLink } from "vue-router";
import Footer from "./Footer.vue";
const { correctAnswers, totalQuestions } = defineProps([
  "correctAnswers",
  "totalQuestions",
  "subjectName",
]);

const resultPercentage = Math.round((correctAnswers / totalQuestions) * 100);
</script>

<template>
  <div class="results">
    <p>{{ resultPercentage > 59 ? `Amazing` : `Congratulations Your`  }} results...</p>
    <h1>{{ correctAnswers }}/{{ totalQuestions }}</h1>
    <h2>You have scored {{ resultPercentage }}% in {{ subjectName }}</h2>
    <RouterLink class="next-button" to="/">Take another quiz</RouterLink>
  </div>
  <Footer />
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
