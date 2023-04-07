<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import Footer from "../components/Footer.vue";
import { useOptionStore } from "../stores/optionState";

const optionStore = useOptionStore();
const correctAnswer = ref(null);

// show hide the answer button
const answerBtn = ref(false);

const { question } = defineProps(["question"]);
const emit = defineEmits(["selectOption"]);

const showAnswers = () => {
  optionStore.showAnswer = !optionStore.showAnswer;
  optionStore.disableSelection = true;
};

const nextBtn = () => {
  optionStore.nextQuestion = true;
  emit("selectOption", correctAnswer);
  correctAnswer.value = false;
  optionStore.selectedOption = null;
  answerBtn.value = false;
};
const emitSelectedOption = (isCorrect, selectOption) => {
  answerBtn.value = true;
  if (!optionStore.disableSelection) {
    correctAnswer.value = isCorrect;
    optionStore.selectedOption = selectOption;
  }
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
        @click="emitSelectedOption(option.isCorrect, option.id)"
      >
        <div
          class="option"
          :class="{
            'option-selected': option.id === optionStore.selectedOption,
            'option-correct': optionStore.showAnswer && option.isCorrect,
            'option-incorrect': optionStore.showAnswer && !option.isCorrect,
          }"
        >
          <p class="option-label">
            {{ option.label }}
          </p>
          <div class="option-value">
            <p>{{ option.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-wrapper">
      <RouterLink class="next-button red" to="/">Take another quiz</RouterLink>
      <!-- button to show correct answers of the current question -->
      <!-- //@TODO update v-show to disabled and change css accordingly -->
      <button
        class="next-button green"
        type="button"
        @click="showAnswers"
        v-show="answerBtn"
      >
        {{ !optionStore.showAnswer ? `Show` : `Hide` }} answers
      </button>
      <!-- button to go to the next question -->
      <button class="next-button blue" type="button" @click="nextBtn">
        {{
          typeof optionStore.finalQuestion !== "function" &&
          optionStore.finalQuestion
            ? `Finish`
            : `Next`
        }}
      </button>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
/* Questions */
.btn-wrapper {
  display: flex;
  padding: 0 10% 30% 10%;
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
  outline: 0.1rem solid #35bc35;
  box-shadow: rgba(26, 220, 49, 0.3) 0px 0px 0px 3px;
}
/* wrong option class */
.option-incorrect {
  outline: 1px dashed #ff0000;
  filter: blur(5px);
  -webkit-filter: blur(5px);
}

.option-selected {
  border: 1px solid #19c0f371;
  border-radius: 10px;
  z-index: 0;
  position: relative;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}
.option-selected:before {
  content: "";
  position: absolute;
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  background-size: 400%;
  top: -2px;
  left: -2px;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);

  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
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

@media (prefers-color-scheme: light) {
  .option-value {
    background: rgba(129, 206, 237, 0.459);
  }
  .option-label {
    background: rgb(129, 206, 237);
  }
  .option-selected {
    border: 1px solid #0d00ff71;
    border-radius: 0;
    box-shadow: rgba(214, 3, 179, 0.763) 0px 0px 0px 3px;
  }
  .option-correct {
    /* good lime green outline */
    border: 1px solid #00ff00;
  }
  /* wrong option class */
  .option-incorrect {
    border: 1.2px dashed #ff0000;
  }
}
</style>
