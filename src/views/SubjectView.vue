<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Questions from "../components/Questions.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import quiz from "../data/quizData.json";
import Results from "../components/Results.vue";

const route = useRoute();
const subjectId = parseInt(route.params.id);
const subjectData = quiz.find((q) => q.id === subjectId);
const currentQuestionIndex = ref(0);
const noOfCorrectAnswers = ref(0);
const showResults = ref(false);
const totalQuestions = subjectData?.questions?.length;

const questionStatus = computed(
  () => {
    if (currentQuestionIndex.value === totalQuestions) return "Completed";
    return `${currentQuestionIndex.value + 1}/${totalQuestions}`
  }
);
const barPercentage = computed(
  () => `${Math.round((currentQuestionIndex.value / totalQuestions) * 100)}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    noOfCorrectAnswers.value++;
  }
  currentQuestionIndex.value++;
  if (currentQuestionIndex.value === totalQuestions) {
    showResults.value = true;
  }
};
</script>
<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div v-if="!showResults">
      <Questions
        @selectOption="onOptionSelected"
        :question="subjectData?.questions[currentQuestionIndex]"
      />
    </div>

    <div v-else>
      <Results
        :totalQuestions="totalQuestions"
        :correctAnswers="noOfCorrectAnswers"
      />
    </div>
  </div>
</template>
