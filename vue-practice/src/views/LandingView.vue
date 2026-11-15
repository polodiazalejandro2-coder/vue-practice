<template>
  <div class="landing-page">
    <section class="hero-section">
      <div class="hero-tag">[ Concurso Musical ]</div>
      <h1 class="hero-title">¿Cuanto sabes de musica?</h1>
      <p class="hero-description">
        Escucha fragmentos de 5 segundos de canciones. 10 puntos por acertar y -5 por fallar. 
        Puedes escuchar cada fragmento las veces que quieras.
      </p>

      <div class="hero-actions">
        <RouterLink to="/jugar" class="btn-primary">
          Comenzar a Jugar
        </RouterLink>
        <RouterLink to="/ranking" class="btn-secondary">
          Ver Ranking
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.landing-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem 1.5rem;
}

.hero-section {
  text-align: center;
  padding-bottom: 3rem;
}

.hero-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.hero-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.05rem;
  color: #888888;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background-color: #2563eb;
  border: 1px solid #3b82f6;
  color: #ffffff;
  text-decoration: none;
  padding: 0.85rem 1.75rem;
  font-weight: 700;
  font-size: 1rem;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-secondary {
  background-color: #1e1e1e;
  border: 1px solid #444444;
  color: #dddddd;
  text-decoration: none;
  padding: 0.85rem 1.75rem;
  font-weight: 700;
  font-size: 1rem;
}

.btn-secondary:hover {
  background-color: #2a2a2a;
  border-color: #666666;
  color: #ffffff;
}

</style>
