<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Footer from "../components/Footer.vue";

const optionSelected = ref(false);

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const emitSelectedOption = (isCorrect) => {
  optionSelected.value = true;
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
        <p
          class="option-label"
          :class="{
            'option-correct': optionSelected && option.isCorrect,
            'option-incorrect': optionSelected && !option.isCorrect,
          }"
        >
          {{ option.label }}
        </p>

        <div
          class="option-value"
          :class="{
            'option-correct': optionSelected && option.isCorrect,
            'option-incorrect': optionSelected && !option.isCorrect,
          }"
        >
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <RouterLink class="next-button" to="/">Take another quiz</RouterLink>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* Questions */
.btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
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

/* correct option class */
.option-correct {
/* good lime green outline */
  outline: 1px solid #00ff00;
}
/* wrong option class */
.option-incorrect {
  outline: 1px dashed #ff0000;
}
.option-label {
  overflow: hidden;
  background-color: #3d3e3cbf;
  width: 3rem;
  height: 3rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.option-value {
  background-color: #292b29b0;
  width: 100%;
  height: 3rem;
  overflow: hidden;
  font-size: 1.8rem;
  padding: 0px 20px;
}
</style>
