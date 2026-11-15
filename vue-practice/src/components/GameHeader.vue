<template>
  <div class="game-header">
    <div class="header-top">
      <div class="player-info">
        <span class="app-subtitle">Adivina la Cancion</span>
        <span class="player-name">{{ store.nombreJugador || 'Jugador' }}</span>
      </div>

      <div class="score-box">
        Puntos: {{ store.puntos }}
      </div>
    </div>

    <div class="progress-info">
      <span>Pregunta {{ store.indicePregunta + 1 }} de {{ store.preguntas.length }}</span>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore'

const store = useGameStore()
</script>

<style scoped>
.game-header {
  width: 100%;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #333333;
  padding-bottom: 1rem;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.player-info {
  display: flex;
  flex-direction: column;
}

.app-subtitle {
  font-size: 0.85rem;
  color: #888888;
}

.player-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
}

.score-box {
  background-color: #2a2a2a;
  border: 1px solid #444444;
  padding: 0.5rem 1rem;
  font-weight: 700;
  color: #ffffff;
}

.progress-info {
  font-size: 0.85rem;
  color: #aaaaaa;
}
</style>
