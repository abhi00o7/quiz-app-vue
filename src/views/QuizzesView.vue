<script setup>
import quiz from "../data/quizData.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import NotFound from "../components/NotFound.vue";

const quizzes = ref(quiz);
const search = ref("");

watch(search, () => {
  quizzes.value = quiz.filter((element) =>
    element.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  );
});
</script>

<template>
    <header>
      <h1>Quizzes</h1>
      <input type="text" v-model.trim="search" placeholder="Search Here" />
    </header>
    <div class="options-container">
      <NotFound
        :msg="'Item not found! Please try using different keywords.'"
        v-show="!quizzes.length"
      />
      <Card v-for="subject in quizzes" :key="subject.id" :subject="subject" />
    </div>
</template>

<style scoped>
.options-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}
</style>
