<script setup>
import QuizHeader from "../components/QuizHeader.vue";
import Questions from "../components/Questions.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import quiz from "../data/quizData.json";

const route = useRoute();

// const subjectName = route.params.name;
const subjectId = parseInt(route.params.id);

const subjectData = quiz.find((q) => q.id === subjectId);
console.log({ subjectId, subjectData });

const currenQuestionIndex = ref(0);
</script>
<template>
  <div>
    <QuizHeader />
    <div>
      <Questions :question="subjectData.questions[currenQuestionIndex]" />
    </div>
  </div>
</template>
