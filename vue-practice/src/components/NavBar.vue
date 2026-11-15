<template>
  <header class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="brand">
        Adivina la Cancion
      </RouterLink>

      <nav class="nav-links">
        <RouterLink to="/" class="nav-link" active-class="active" exact>
          Inicio
        </RouterLink>

        <RouterLink to="/jugar" class="nav-link" active-class="active">
          Jugar
        </RouterLink>

        <RouterLink to="/ranking" class="nav-link" active-class="active">
          Ranking
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  background-color: #1e1e1e;
  border-bottom: 1px solid #333333;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #aaaaaa;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  background-color: transparent;
}

.nav-link:hover {
  color: #ffffff;
  border-color: #444444;
}

.nav-link.active {
  color: #ffffff;
  background-color: #2a2a2a;
  border-color: #555555;
}
</style>
