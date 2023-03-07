<script setup>
const year = new Date().getFullYear();
</script>

<template>
  <footer>
    <div class="footer">
      &copy;<span id="year">{{ year }}</span
      ><span> batman. All rights reserved.</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  margin-bottom: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
}

@media screen and (min-width: 30px) and (orientation: portrait) {
  .footer {
    position: sticky;
  }
}

</style>
