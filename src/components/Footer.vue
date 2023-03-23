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
/* footer styles to cover whole screen area */
.footer {
  position: static;
  bottom: 0;
  left: 0%;
  width: 100%;
  height: 50px;
  background-color: transparent;
  color: #fff;
  text-align: center;
  line-height: 2rem;
  font-size: small;
}
@media screen and (min-width: 30px) and (orientation: portrait) {
  .footer {
    position: sticky;
  }
}
</style>
