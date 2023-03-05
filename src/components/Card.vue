<script setup>
import { useRouter } from "vue-router";

// importing props for component
const { subject } = defineProps(["subject"]);
const router = useRouter();

const navigateToSubject = () => {
  router.push(`/subject/${subject.name.toLocaleLowerCase()}/${subject.id}`);
};
</script>

<template>
  <div class="card" @click="navigateToSubject">
    <div>
      <img :src="subject.img" :alt="`${subject.name} image`" />
      <div class="card-text">
        <h2>{{ subject.name }}</h2>
        <p>{{ subject.questions.length }} Questions</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
