<script setup>
import quiz from "./data/quizData.json";
import { ref, watch } from "vue";

const quizzes = ref(quiz);
const search = ref("");

watch(search, () => {
  quizzes.value = quiz.filter((element) =>
    element.name.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  );
});
</script>

<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input type="text" v-model.trim="search" placeholder="Search Here" />
    </header>
    <div class="options-container">
      <div v-show="!quizzes.length">
        <h2>Subject not available</h2>
      </div>
      <div v-for="subject in quizzes" :key="subject.id" class="card">
        <div>
          <img :src="subject.img" :alt="`${subject.name} image`" />
          <div class="card-text">
            <h2>{{ subject.name }}</h2>
            <p>{{ subject.questions.length }} Questions</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* * {
  outline: 1px solid lime;
} */
.container {
  max-width: 1080px;
  margin: 0 auto;
}

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

/* card */

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px blur #000;
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}
</style>
