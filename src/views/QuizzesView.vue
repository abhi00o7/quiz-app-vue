<script setup>
import quiz from "../data/quizData.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import NotFound from "../components/NotFound.vue";
import Footer from "../components/Footer.vue";
import gsap from "gsap";

const quizzes = ref(quiz);
const search = ref("");

watch(search, () => {
  quizzes.value = quiz.filter((element) =>
    element.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

// transition animation functions
const beforeEnter = (el) => {
  // card-enter-from
  el.style.transform = `translateY(-50px)`;
  el.style.opacity = 0;
};
const enter = (el) => {
  // card-enter-to
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: el.dataset.index * 0.4,
  });
};
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
    <TransitionGroup
      name="card"
      @before-enter="beforeEnter"
      @enter="enter"
      appear
    >
      <Card
        v-for="(subject, index) in quizzes"
        :key="subject.id"
        :subject="subject"
        :data-index="index"
      />
    </TransitionGroup>
  </div>
  <Footer />
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
  padding-left: 1rem;
}

header input {
  border: none;
  background-color: rgba(255 255 255/0.09);
  color: ghostwhite;
  padding: 10px;
  border-radius: 5px;
}
@media screen and (min-width: 30px) and (orientation: portrait) {
  .options-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

</style>
