<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Questions from "../components/Questions.vue";
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";
import quiz from "../data/quizData.json";

const route = useRoute();
const subjectId = parseInt(route.params.id);
const subjectData = quiz.find((q) => q.id === subjectId);
const currentQuestionIndex = ref(0);

const questionStatus = computed(
  () => `${currentQuestionIndex.value + 1}/${subjectData?.questions?.length}`
);
</script>
<template>
  <div>
    <QuizHeader :questionStatus="questionStatus" />
    <div>
      <Questions :question="subjectData?.questions[currentQuestionIndex]" />
    </div>
    <button @click="currentQuestionIndex++">Next Question</button>
  </div>
</template>
