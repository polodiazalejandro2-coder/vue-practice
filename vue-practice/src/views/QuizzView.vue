<template>
  <div class="quizz-view-wrapper">
    <div v-if="gameState === 'welcome'" class="game-card welcome-card">
      <div class="welcome-tag">[ Registro ]</div>
      <h2 class="welcome-title">Adivina la Cancion</h2>
      <p class="welcome-subtitle">
        Escucha el fragmento de 5 segundos y elige el titulo correcto.
      </p>

      <div class="rules-list">
        <div class="rule-item">
          <span class="rule-index">1.</span>
          <span>Puedes reproducir la cancion tantas veces como quieras.</span>
        </div>
        <div class="rule-item">
          <span class="rule-index">2.</span>
          <span>Elige la opcion correcta entre las 4 mostradas.</span>
        </div>
        <div class="rule-item">
          <span class="rule-index">3.</span>
          <span>+10 puntos si aciertas, -5 puntos si fallas.</span>
        </div>
      </div>

      <form @submit.prevent="handleStartGame" class="name-form">
        <label class="input-label" for="playerNameInput">Nombre del jugador:</label>
        <input
          id="playerNameInput"
          v-model="inputPlayerName"
          type="text"
          class="name-input"
          placeholder="Escribe tu nombre"
          maxlength="20"
          required
        />

        <button
          type="submit"
          class="start-game-btn"
          :disabled="!inputPlayerName.trim()"
        >
          Comenzar Juego
        </button>
      </form>
    </div>

    <div v-else-if="gameState === 'playing'" class="game-card playing-card">
      <GameHeader />

      <AudioPlayer
        ref="audioPlayerRef"
        v-if="preguntaActual"
        :audio-src="preguntaActual.audioSrc"
      />

      <QuestionCard
        v-if="preguntaActual"
        :pregunta="preguntaActual"
        :respondido="respondido"
        :opcion-seleccionada="opcionSeleccionada"
        :es-correcta="esCorrecta"
        :mensaje-feedback="mensajeFeedback"
        :es-ultima="esUltima"
        @seleccionar-opcion="handleSelectOption"
        @siguiente="handleNextQuestion"
      />
    </div>

    <div v-else-if="gameState === 'finished'" class="game-card finished-card">
      <GameFinished @restart="handleRestartGame" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '@/stores/gameStore'
import GameHeader from '@/components/GameHeader.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
import QuestionCard from '@/components/QuestionCard.vue'
import GameFinished from '@/components/GameFinished.vue'

const store = useGameStore()

const gameState = ref('welcome')
const inputPlayerName = ref('')
const audioPlayerRef = ref(null)

const respondido = ref(false)
const opcionSeleccionada = ref('')
const esCorrecta = ref(false)
const mensajeFeedback = ref('')

const preguntaActual = computed(() => {
  return store.preguntas[store.indicePregunta] || null
})

const esUltima = computed(() => {
  return store.indicePregunta === store.preguntas.length - 1
})

function resetQuestionState() {
  respondido.value = false
  opcionSeleccionada.value = ''
  esCorrecta.value = false
  mensajeFeedback.value = ''
}

function handleStartGame() {
  if (!inputPlayerName.value.trim()) return
  store.iniciarJuego(inputPlayerName.value)
  gameState.value = 'playing'
  resetQuestionState()
}

function handleSelectOption(opcion) {
  if (respondido.value) return

  if (audioPlayerRef.value) {
    audioPlayerRef.value.detenerAudio()
  }

  respondido.value = true
  opcionSeleccionada.value = opcion

  if (opcion === preguntaActual.value.correct) {
    esCorrecta.value = true
    mensajeFeedback.value = 'Respuesta correcta (+10 puntos)'
    store.sumarPuntos()
  } else {
    esCorrecta.value = false
    mensajeFeedback.value = 'Respuesta incorrecta (-5 puntos)'
    store.restarPuntos()
  }
}

function handleNextQuestion() {
  if (esUltima.value) {
    store.guardarEnRanking()
    gameState.value = 'finished'
  } else {
    store.siguientePregunta()
    resetQuestionState()
  }
}

function handleRestartGame() {
  store.iniciarJuego(store.nombreJugador)
  gameState.value = 'playing'
  resetQuestionState()
}
</script>

<style scoped>
.quizz-view-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 1.5rem 5rem 1.5rem;
  min-height: calc(100vh - 70px);
}

.game-card {
  background-color: #1a1a1a;
  border: 1px solid #333333;
  width: 100%;
  max-width: 550px;
  padding: 2rem;
}

.welcome-card {
  text-align: left;
}

.welcome-tag {
  font-size: 0.8rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.welcome-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.welcome-subtitle {
  font-size: 0.95rem;
  color: #888888;
  margin-bottom: 1.5rem;
}

.rules-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background-color: #242424;
  border: 1px solid #333333;
  padding: 1rem;
}

.rule-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #cccccc;
}

.rule-index {
  font-weight: 700;
  color: #3b82f6;
}

.name-form {
  width: 100%;
}

.input-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #aaaaaa;
  margin-bottom: 0.5rem;
}

.name-input {
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #242424;
  border: 1px solid #444444;
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  outline: none;
}

.name-input:focus {
  border-color: #3b82f6;
}

.start-game-btn {
  width: 100%;
  padding: 0.85rem;
  background-color: #2563eb;
  border: 1px solid #3b82f6;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
}

.start-game-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.start-game-btn:not(:disabled):hover {
  background-color: #1d4ed8;
}
</style>