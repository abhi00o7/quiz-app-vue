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
.next-button {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin-top: 25px;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 20%;
  will-change: transform;
}

.next-button:disabled {
  pointer-events: none;
}

.next-button:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.next-button:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>
