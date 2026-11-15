<template>
  <div class="landing-page">
    <section class="hero-section">
      <div class="hero-tag">[ Concurso Musical ]</div>
      <h1 class="hero-title">¿Cuanto sabes de musica?</h1>
      <p class="hero-description">
        Escucha fragmentos de 5 segundos de canciones y adivina el titulo correcto
        entre 4 opciones. Puedes escuchar cada fragmento las veces que quieras.
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

    <section class="rules-section">
      <h2 class="section-title">Normas del juego</h2>

      <div class="rules-grid">
        <div class="rule-box">
          <span class="rule-num">1. Escucha</span>
          <p>Reproduce el fragmento de 5 segundos tantas veces como necesites.</p>
        </div>

        <div class="rule-box">
          <span class="rule-num">2. Adivina</span>
          <p>Selecciona una opcion entre las 4 alternativas posibles.</p>
        </div>

        <div class="rule-box">
          <span class="rule-num">3. Puntuacion</span>
          <p>Acierto: +10 puntos. Fallo: -5 puntos.</p>
        </div>
      </div>
    </section>

    <section class="stats-banner">
      <div class="stat-item">
        <span class="stat-number">5</span>
        <span class="stat-text">Canciones por partida</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">50</span>
        <span class="stat-text">Puntos maximos</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">5s</span>
        <span class="stat-text">Duracion del fragmento</span>
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
  border-bottom: 1px solid #2a2a2a;
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

.rules-section {
  padding: 3rem 0;
  border-bottom: 1px solid #2a2a2a;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.rule-box {
  background-color: #1a1a1a;
  border: 1px solid #333333;
  padding: 1.5rem;
}

.rule-num {
  font-size: 1rem;
  font-weight: 700;
  color: #3b82f6;
  display: block;
  margin-bottom: 0.5rem;
}

.rule-box p {
  font-size: 0.9rem;
  color: #888888;
  line-height: 1.4;
}

.stats-banner {
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-text {
  font-size: 0.85rem;
  color: #888888;
}
</style>
