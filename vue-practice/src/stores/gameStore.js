import { ref } from 'vue'
import { defineStore } from 'pinia'
import { songsData } from '@/data/songs'

export const useGameStore = defineStore('game', function () {
  const nombreJugador = ref('')
  const puntos = ref(0)
  const indicePregunta = ref(0)
  const preguntas = ref([])
  const aciertos = ref(0)
  const ranking = ref([])

  const rankingGuardado = localStorage.getItem('ranking')

  if (rankingGuardado) {
    ranking.value = JSON.parse(rankingGuardado)
  }

  function iniciarJuego(nombre) {
    nombreJugador.value = nombre
    puntos.value = 0
    aciertos.value = 0
    indicePregunta.value = 0

    const cancionesMezcladas = songsData.slice()

    cancionesMezcladas.sort(function () {
      return Math.random() - 0.5
    })

    preguntas.value = cancionesMezcladas.map(function (cancion) {
      const opcionesMezcladas = cancion.options.slice()

      opcionesMezcladas.sort(function () {
        return Math.random() - 0.5
      })

      const pregunta = {
        id: cancion.id,
        title: cancion.title,
        artist: cancion.artist,
        question: cancion.question,
        options: opcionesMezcladas,
        correct: cancion.correct,
        audioSrc: cancion.audioSrc
      }

      return pregunta
    })
  }

  function sumarPuntos() {
    puntos.value = puntos.value + 10
    aciertos.value = aciertos.value + 1
  }

  function restarPuntos() {
    puntos.value = puntos.value - 5
  }

  function siguientePregunta() {
    indicePregunta.value = indicePregunta.value + 1
  }

  function guardarEnRanking() {
    const partida = {
      nombre: nombreJugador.value,
      puntos: puntos.value,
      aciertos: aciertos.value
    }

    ranking.value.push(partida)

    ranking.value.sort(function (partidaA, partidaB) {
      return partidaB.puntos - partidaA.puntos
    })

    localStorage.setItem('ranking', JSON.stringify(ranking.value))
  }

  return {
    nombreJugador: nombreJugador,
    puntos: puntos,
    indicePregunta: indicePregunta,
    preguntas: preguntas,
    aciertos: aciertos,
    ranking: ranking,
    iniciarJuego: iniciarJuego,
    sumarPuntos: sumarPuntos,
    restarPuntos: restarPuntos,
    siguientePregunta: siguientePregunta,
    guardarEnRanking: guardarEnRanking
  }
})
