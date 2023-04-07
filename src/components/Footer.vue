<script setup>
import { computed } from "vue";
import { useAppInfoStore } from "../stores/appInfoStore";

const appInfoStore = useAppInfoStore();
const version = computed(() => appInfoStore.appVersion);
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="footer">
      <span>v{{ version }}</span>
      &copy;<span id="year">{{ year }}</span
      ><span
        ><a href="https://github.com/abhi00o7/quiz-app-vue/" class="anchor fancy" target="_blank">
          batman</a
        >. All rights reserved.</span
      >

    </div>
  </footer>
</template>

<style scoped>
/* footer styles to cover whole screen area */
footer {
  position: static;
  bottom: 0;
  left: 0%;
  width: 100%;
  height: 50px;
  background-color: transparent;
  color: var(--color-text);
  text-align: center;
  line-height: 2rem;
  font-size: small;
}

.anchor {
  font-family: Roboto;
  text-transform: uppercase;
  color: var(--color-text);
  text-decoration: none;
}

@media screen and (min-width: 380px) and (orientation: portrait) {
  .footer {
    position: sticky;
  }
}
</style>
