<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Questions from "../components/Questions.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import quiz from "../data/quizData.json";

const route = useRoute();
const subjectId = parseInt(route.params.id);
const subjectData = quiz.find((q) => q.id === subjectId);
const currentQuestionIndex = ref(0);

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${subjectData?.questions?.length}`
);
const barPercentage = computed(
  () =>
    `${Math.round(
      (currentQuestionIndex.value / subjectData?.questions?.length) * 100
    )}%`
);
</script>
<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Questions :question="subjectData?.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">Next Question</button>
  </div>
</template>
