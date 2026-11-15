<template>
  <div class="finished-container">
    <div class="result-badge">[ FIN DEL JUEGO ]</div>

    <h2 class="feedback-title">{{ tituloMotivacion }}</h2>
    <p class="feedback-subtitle">{{ mensajeMotivacion }}</p>

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

    <button class="play-again-btn" @click="$emit('restart')">
      Jugar de Nuevo
    </button>
  </div>
</template>

<script setup>
import { useGameStore } from '@/stores/gameStore'

const store = useGameStore()
defineEmits(['restart'])

let precision = 0

if (store.preguntas.length > 0) {
  precision = Math.round((store.aciertos / store.preguntas.length) * 100)
}

let tituloMotivacion = 'Partida finalizada'
let mensajeMotivacion = 'Sigue practicando para subir en el ranking.'

if (store.puntos >= 40) {
  tituloMotivacion = 'Excelente resultado'
  mensajeMotivacion = 'Has acertado la mayoria de las canciones.'
} else if (store.puntos >= 20) {
  tituloMotivacion = 'Buen trabajo'
  mensajeMotivacion = 'Buen intento, puedes mejorar tu puntuacion.'
}
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