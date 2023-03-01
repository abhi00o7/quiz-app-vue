<script setup></script>

<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" />
    </header>
    <div class="options-container"></div>
  </div>
</template>

<style scoped>
.container {
  min-width: 1080px;
  margin: 0 auto;
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
}
</style>
