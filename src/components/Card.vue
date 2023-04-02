<script setup>
import { useRouter } from "vue-router";

// importing props for component
const { subject } = defineProps(["subject"]);
const router = useRouter();

// regex to remove special characters from subject name and add underscore and make it lowercase
const subjectName = subject?.name?.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();

const navigateToSubject = () => {
  router.push(`/questions/${subjectName}/${subject.id}`);
};
</script>

<template>
  <div class="card" @click="navigateToSubject">
    <div>
      <img :src="subject.img" :alt="`${subject.name} image`" />
      <div class="card-text">
        <h2>{{ subject.name }}</h2>
        <p>{{ subject?.questions?.length }} Questions</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* card */

.card {
  padding-top: 2.5rem;
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 11px 15px -7px rgba(0, 0, 0, 0.2);
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

@media screen and (min-width: 30em) and (orientation: portrait) {
  .card {
    padding-top: 1rem;
  }
}
</style>
