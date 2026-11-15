<template>
  <div class="question-card" v-if="pregunta">
    <div class="question-header">
      <h3 class="question-title">{{ pregunta.question }}</h3>
      <p class="question-artist" v-if="respondido">{{ pregunta.title }} - {{ pregunta.artist }}</p>
      <p class="question-artist-hint" v-else>Pista: {{ pregunta.artist }}</p>
    </div>

    <div class="options-grid">
      <button
        v-for="(opcion, index) in pregunta.options"
        :key="index"
        class="option-btn"
        :class="{
          'opcion-correcta': respondido && opcion === pregunta.correct,
          'opcion-incorrecta': respondido && opcion === opcionSeleccionada && opcion !== pregunta.correct,
          'opcion-desactivada': respondido && opcion !== pregunta.correct && opcion !== opcionSeleccionada
        }"
        :disabled="respondido"
        @click="$emit('seleccionar-opcion', opcion)"
      >
        <span>{{ opcion }}</span>

        <span v-if="respondido && opcion === pregunta.correct" class="badge-acierto">
          [Correcto]
        </span>
        <span v-else-if="respondido && opcion === opcionSeleccionada && opcion !== pregunta.correct" class="badge-fallo">
          [Incorrecto]
        </span>
      </button>
    </div>

    <div v-if="respondido" class="answer-feedback">
      <p class="feedback-text" :class="esCorrecta ? 'texto-verde' : 'texto-rojo'">
        {{ mensajeFeedback }}
      </p>

      <button class="next-btn" @click="$emit('siguiente')">
        {{ esUltima ? 'Ver Resultados' : 'Siguiente Pregunta' }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pregunta: {
    type: Object,
    required: true
  },
  respondido: {
    type: Boolean,
    default: false
  },
  opcionSeleccionada: {
    type: String,
    default: ''
  },
  esCorrecta: {
    type: Boolean,
    default: false
  },
  mensajeFeedback: {
    type: String,
    default: ''
  },
  esUltima: {
    type: Boolean,
    default: false
  }
})

defineEmits(['seleccionar-opcion', 'siguiente'])
</script>

<style scoped>
.question-card {
  width: 100%;
}

.question-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.question-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.35rem;
}

.question-artist {
  font-size: 0.95rem;
  color: #60a5fa;
}

.question-artist-hint {
  font-size: 0.85rem;
  color: #888888;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.option-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.85rem 1.25rem;
  background-color: #242424;
  border: 1px solid #383838;
  color: #dddddd;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: left;
}

.option-btn:hover:not(:disabled) {
  background-color: #303030;
  border-color: #555555;
  color: #ffffff;
}

.opcion-correcta {
  background-color: #064e3b;
  border-color: #22c55e;
  color: #4ade80;
  font-weight: 700;
}

.opcion-incorrecta {
  background-color: #450a0a;
  border-color: #ef4444;
  color: #f87171;
  font-weight: 700;
}

.opcion-desactivada {
  opacity: 0.4;
}

.badge-acierto {
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
}

.badge-fallo {
  font-size: 0.85rem;
  font-weight: 700;
  color: #f87171;
}

.answer-feedback {
  margin-top: 1rem;
  text-align: center;
}

.feedback-text {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0.75rem;
}

.texto-verde {
  background-color: #064e3b;
  border: 1px solid #22c55e;
  color: #4ade80;
}

.texto-rojo {
  background-color: #450a0a;
  border: 1px solid #ef4444;
  color: #f87171;
}

.next-btn {
  width: 100%;
  padding: 0.85rem;
  background-color: #2563eb;
  border: 1px solid #3b82f6;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
}

.next-btn:hover {
  background-color: #1d4ed8;
}
</style>
