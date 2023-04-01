<script setup>
const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>

<template>
  <header>
    <h3>
      {{
        questionStatus === "Completed"
          ? `Test Completed`
          : `Questions: ${questionStatus}`
      }}
    </h3>
    <div class="bar">
      <div class="completion" :style="{ width: barPercentage }"></div>
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
  height: 5px;
  bottom: 3px solid hsl(56, 10%, 73%);
  outline: 1px solid #d8c6cf;
}

.completion {
  height: 100%;
  background-color: #d8c6cf;
}
</style>
