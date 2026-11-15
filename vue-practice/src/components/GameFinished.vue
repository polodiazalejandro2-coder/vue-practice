<template>
  <div class="finished-container">
    <div class="result-badge">[ FIN DEL JUEGO ]</div>

    <h2 class="feedback-title">{{ motivationalTitle }}</h2>
    <p class="feedback-subtitle">{{ motivationalSubtitle }}</p>

    <div class="score-summary-card">
      <div class="final-score-section">
        <span class="final-score-label">Puntuacion Final</span>
        <span class="final-score-number">{{ store.puntos }}</span>
        <span class="final-score-max">de {{ store.preguntas.length * 10 }} puntos posibles</span>
      </div>

      <div class="stats-row">
        <div class="stat-box">
          <span class="stat-label">Correctas:</span>
          <span class="stat-value">{{ store.aciertos }} / {{ store.preguntas.length }}</span>
        </div>

        <div class="stat-box">
          <span class="stat-label">Precision:</span>
          <span class="stat-value">{{ precision }}%</span>
        </div>
      </div>
    </div>

    <div class="ranking-preview-section">
      <div class="ranking-preview-title">
        Resumen de tu partida
      </div>

      <div class="user-rank-highlight">
        <div class="user-rank-left">
          <span class="rank-name">{{ store.nombreJugador }}</span>
          <span class="you-badge">[ Tu ]</span>
        </div>
        <div class="user-rank-center">
          <span>{{ precision }}% de precision</span>
        </div>
        <div class="user-rank-right">
          <span class="rank-points-num">{{ store.puntos }}</span>
          <span class="rank-points-text">puntos</span>
        </div>
      </div>
    </div>

    <button class="play-again-btn" @click="$emit('restart')">
      Jugar de Nuevo
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGameStore } from '@/stores/gameStore'

const store = useGameStore()
defineEmits(['restart'])

const precision = computed(() => {
  if (!store.preguntas.length) return 0
  return Math.round((store.aciertos / store.preguntas.length) * 100)
})

const motivationalTitle = computed(() => {
  if (store.puntos >= 40) return 'Excelente resultado'
  if (store.puntos >= 20) return 'Buen trabajo'
  return 'Partida finalizada'
})

const motivationalSubtitle = computed(() => {
  if (store.puntos >= 40) return 'Has acertado la mayoria de las canciones.'
  if (store.puntos >= 20) return 'Buen intento, puedes mejorar tu puntuacion.'
  return 'Sigue practicando para subir en el ranking.'
})
</script>

<style scoped>
.finished-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.result-badge {
  font-size: 0.85rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.75rem;
  letter-spacing: 1px;
}

.feedback-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.feedback-subtitle {
  font-size: 0.95rem;
  color: #888888;
  margin-bottom: 1.5rem;
}

.score-summary-card {
  width: 100%;
  background-color: #1a1a1a;
  border: 1px solid #333333;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.final-score-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #2a2a2a;
}

.final-score-label {
  font-size: 0.85rem;
  color: #888888;
}

.final-score-number {
  font-size: 3rem;
  font-weight: 800;
  color: #3b82f6;
  margin: 0.25rem 0;
}

.final-score-max {
  font-size: 0.8rem;
  color: #666666;
}

.stats-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.stat-box {
  background-color: #242424;
  border: 1px solid #333333;
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
}

.stat-label {
  font-size: 0.85rem;
  color: #888888;
}

.stat-value {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
}

.ranking-preview-section {
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: left;
}

.ranking-preview-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #aaaaaa;
  margin-bottom: 0.75rem;
}

.user-rank-highlight {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #242424;
  border: 1px solid #3b82f6;
  padding: 0.75rem 1rem;
}

.user-rank-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rank-name {
  font-weight: 700;
  color: #ffffff;
}

.you-badge {
  font-size: 0.75rem;
  color: #3b82f6;
  font-weight: 700;
}

.user-rank-center {
  font-size: 0.85rem;
  color: #888888;
}

.user-rank-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.rank-points-num {
  font-size: 1.1rem;
  font-weight: 800;
  color: #3b82f6;
}

.rank-points-text {
  font-size: 0.75rem;
  color: #666666;
}

.play-again-btn {
  width: 100%;
  padding: 0.85rem;
  background-color: #2563eb;
  border: 1px solid #3b82f6;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
}

.play-again-btn:hover {
  background-color: #1d4ed8;
}
</style>