<script setup>
import { RouterLink } from "vue-router";

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);
const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <div>
    <div class="questions-container">
      <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
      <div
        v-for="option in question.options"
        :key="option.id"
        @click="emitSelectedOption(option.isCorrect)"
        class="option"
      >
        <p class="option-label">{{ option.label }}</p>
        <div class="option-value">
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
    <RouterLink class="next-button" to="/">Take another quiz</RouterLink>
  </div>
</template>

<style scoped>
/* Questions */
.questions-container {
  margin-top: 35px;
}

.question {
  font-size: 2rem;
  margin-bottom: 20px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  background-color: #dad2d015;
  width: 40px;
  height: 40px;
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.option-value {
  background-color: #301a14b0;
  width: 100%;
  font-size: 1.8rem;
  padding: 0px 20px;
}
</style>
