<script setup>
const { questionStatus } = defineProps(["questionStatus"]);
</script>

<template>
  <header>
    <h3>Questions: {{ questionStatus }}</h3>
    <div class="bar">
      <div class="completion"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 35px;
}

header h3 {
  font-size: 2.5rem;
}
.bar {
  width: 300px;
  height: 50px;
  bottom: 3px solid hsl(56, 10%, 73%);
}

.completion {
  height: 100%;
  width: 100%;
  background-color: #d8c6cf;
}
</style>
