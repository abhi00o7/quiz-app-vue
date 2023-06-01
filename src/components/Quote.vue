// template for showing quotes

<template>
  <div class="quote">
    <div class="quote-text">
      <h2>{{ quote.text }}</h2>
      <p>{{ quote.author }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useQuoteStore } from "../stores/quoteStore";

const quoteStore = useQuoteStore();
const quote = computed(() => quoteStore.quote);
</script>


<style scoped>
.quote {
  padding-top: 0.5rem;
  width: 310px;
  overflow:auto;
  border-radius: 2%;
}
</style>