<template>
  <div class="ranking-view-wrapper">
    <div class="ranking-header">
      <div class="ranking-tag">[ Clasificacion ]</div>
      <h1 class="ranking-title">Tabla de Clasificacion</h1>
      <p class="ranking-subtitle">Las mejores puntuaciones registradas</p>
    </div>

    <div v-if="store.ranking.length === 0" class="empty-ranking-card">
      <h2 class="empty-title">Aun no hay puntuaciones</h2>
      <p class="empty-subtitle">Se el primero en completar una partida.</p>
      <RouterLink to="/jugar" class="btn-play-now">
        Jugar Ahora
      </RouterLink>
    </div>

    <div v-else class="ranking-list-card">
      <div class="ranking-items">
        <div
          v-for="(item, index) in store.ranking"
          class="ranking-item"
        >
          <div class="item-left">
            <span class="position-badge">[{{ index + 1 }}]</span>

            <div class="item-info">
              <div class="name-row">
                <span class="player-name">{{ item.nombre }}</span>
                <span v-if="index === 0" class="honor-badge">[Campeon]</span>
                <span v-else-if="index === 1" class="honor-badge">[Segundo]</span>
                <span v-else-if="index === 2" class="honor-badge">[Tercero]</span>
              </div>

              <div class="details-row">
                <span>{{ item.aciertos }} aciertos</span>
              </div>
            </div>
          </div>

          <div class="item-right">
            <span class="points-number">{{ item.puntos }}</span>
            <span class="points-label">puntos</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-actions">
      <RouterLink to="/" class="btn-back">
        Volver al Inicio
      </RouterLink>
      <RouterLink to="/jugar" class="btn-play-now">
        Jugar Ahora
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useGameStore } from '@/stores/gameStore'

const store = useGameStore()
</script>

<style scoped>
.ranking-view-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem 1.5rem;
}

.ranking-header {
  text-align: center;
  margin-bottom: 2rem;
}

.ranking-tag {
  font-size: 0.8rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.ranking-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.ranking-subtitle {
  font-size: 0.95rem;
  color: #888888;
}

.empty-ranking-card {
  background-color: #1a1a1a;
  border: 1px solid #333333;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.empty-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.empty-subtitle {
  font-size: 0.95rem;
  color: #888888;
  margin-bottom: 1.5rem;
}

.ranking-list-card {
  margin-bottom: 2rem;
}

.ranking-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.ranking-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  border: 1px solid #333333;
  padding: 1rem 1.25rem;
}

.ranking-item:nth-child(1) {
  border-color: #eab308;
  background-color: #201e14;
}

.ranking-item:nth-child(2) {
  border-color: #94a3b8;
  background-color: #1e2124;
}

.ranking-item:nth-child(3) {
  border-color: #f97316;
  background-color: #241c17;
}

.item-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.position-badge {
  font-weight: 700;
  color: #3b82f6;
  font-size: 0.95rem;
}

.ranking-item:nth-child(1) .position-badge {
  color: #eab308;
}

.ranking-item:nth-child(2) .position-badge {
  color: #94a3b8;
}

.ranking-item:nth-child(3) .position-badge {
  color: #f97316;
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.name-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.player-name {
  font-weight: 700;
  color: #ffffff;
  font-size: 1rem;
}

.honor-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: #888888;
}

.ranking-item:nth-child(1) .honor-badge {
  color: #eab308;
}

.ranking-item:nth-child(2) .honor-badge {
  color: #94a3b8;
}

.ranking-item:nth-child(3) .honor-badge {
  color: #f97316;
}

.details-row {
  display: flex;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: #888888;
}

.item-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.points-number {
  font-size: 1.4rem;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1;
}

.points-label {
  font-size: 0.75rem;
  color: #888888;
}

.bottom-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-back {
  background-color: #1e1e1e;
  border: 1px solid #444444;
  color: #cccccc;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
}

.btn-back:hover {
  background-color: #2a2a2a;
  color: #ffffff;
}

.btn-play-now {
  background-color: #2563eb;
  border: 1px solid #3b82f6;
  color: #ffffff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
}

.btn-play-now:hover {
  background-color: #1d4ed8;
}
</style>