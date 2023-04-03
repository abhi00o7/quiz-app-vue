<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <!-- responsive navbar for home and about page  -->
    <nav class="navbar">
      <div class="nav-center">
        <ul class="nav-links">
          <li>
            <RouterLink id="nav-item" class="nav-link" to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink id="nav-item" class="nav-link" to="/about"
              >About</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  background: var(--clr-primary-10);
  color: var(--clr-primary-1);
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0.5rem 1rem;
  border-bottom: 4px solid var(--clr-primary-7);
}
.nav-center {
  max-width:50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* set both elements side by side */
  align-items: center;
}
/* .nav-links {
  display: none;
} */

.nav-links li {
  list-style-type: none;
}

.nav-links #nav-item {
  color: var(--clr-primary-1);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  padding: 0.5rem;
  display: block;
  transition: var(--transition);
  font-size: 1rem;
}

.nav-links #nav-item:hover {
  background: var(--clr-primary-3);
  color: var(--clr-primary-10);
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
}

@media screen and (min-width: 800px) {
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .nav-links {
    display: flex;
    justify-content: flex-end;
  }
  .nav-links li {
    margin-left: 2rem;
  }
  .nav-links #nav-item {
    padding: 0.5rem 1rem;
  }
}

@media screen and (min-width: 992px) {
  .nav-center {
    width: 95vw;
    max-width: 50%;
  }
  .nav-links li {
    margin-left: 2.5rem;
  }
  .nav-links #nav-item {
    font-size: 1.1rem;
  }
}
 @media screen and (min-width: 1170px) {
  .nav-center {
    width: 90vw;
  }
}

</style>
