<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import Footer from "../components/Footer.vue";
import { useOptionStore } from "../stores/optionState";

const optionStore = useOptionStore();
const selectedOption = ref(null);

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const showAnswers = () => {
  optionStore.showAnswer = !optionStore.showAnswer;
};

const nextBtn = () => {
  optionStore.nextQuestion = true;
  emit("selectOption", selectedOption);
  selectedOption.value = false;
};
const emitSelectedOption = (isCorrect) => {
  selectedOption.value = isCorrect;
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
        <p class="option-label">
          {{ option.label }}
        </p>
        <div
          class="option-value"
          :class="{
            'option-correct': optionStore.showAnswer && option.isCorrect,
            'option-incorrect':
              optionStore.showAnswer && !option.isCorrect,
          }"
        >
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <RouterLink class="next-button red" to="/">Take another quiz</RouterLink>
      <!-- button to show correct answers of the current question -->
      <button class="next-button green" type="button" @click="showAnswers">
        {{ !optionStore.showAnswer ? `Show` : `Hide` }} answers
      </button>
      <!-- button to go to the next question -->
      <button class="next-button blue" type="button" @click="nextBtn">
        Next question
      </button>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* Questions */
.btn-wrapper {
  display: flex;
  padding:0 10% 30% 10%;
  align-items: center;
  gap: 14%;
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

.option-selected {
  outline: 1px dashed #ffdd00;
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

/* NORMAL SCREENS */
@media only screen and (max-width: 900px) {
.btn-wrapper {
  gap: 10%;
}
.next-button {
  width: 50%;
  margin-top: 0.5rem;
  min-height: 0%;
}
}


/* modern smartphone media query */
@media only screen and (max-width: 800px) {
.btn-wrapper {
  flex-direction: column-reverse;
}
.next-button {
  width: 50%;
  margin-top: 0.5rem;
  min-height: 0%;
}
}

/* iphone SE media query */
@media only screen and (max-width: 380px) {
.btn-wrapper {
  flex-direction: column-reverse;
}
.next-button {
  width: 50%;
}
}

</style>
