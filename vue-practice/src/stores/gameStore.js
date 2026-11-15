import { defineStore } from 'pinia'
import { songsData } from '@/data/songs'

export const useGameStore = defineStore('game', {
  state: () => ({
    nombreJugador: '',
    puntos: 0,
    indicePregunta: 0,
    preguntas: [],
    aciertos: 0,
    ranking: JSON.parse(localStorage.getItem('ranking') || '[]')
  }),

  actions: {
    iniciarJuego(nombre) {
      this.nombreJugador = nombre
      this.puntos = 0
      this.aciertos = 0
      this.indicePregunta = 0

      const cancionesMezcladas = songsData.slice()
      cancionesMezcladas.sort(function () {
        return Math.random() - 0.5
      })

      this.preguntas = cancionesMezcladas.map(function (cancion) {
        const opcionesMezcladas = cancion.options.slice()
        opcionesMezcladas.sort(function () {
          return Math.random() - 0.5
        })

        return {
          id: cancion.id,
          title: cancion.title,
          artist: cancion.artist,
          question: cancion.question,
          options: opcionesMezcladas,
          correct: cancion.correct,
          audioSrc: cancion.audioSrc
        }
      })
    },

    sumarPuntos() {
      this.puntos += 10
      this.aciertos++
    },

    restarPuntos() {
      this.puntos -= 5
    },

    siguientePregunta() {
      this.indicePregunta++
    },

    guardarEnRanking() {
      const partida = {
        nombre: this.nombreJugador,
        puntos: this.puntos,
        aciertos: this.aciertos,
      }

      this.ranking.push(partida)
      this.ranking.sort(function (partidaA, partidaB) {
        return partidaB.puntos - partidaA.puntos
      })
      localStorage.setItem('ranking', JSON.stringify(this.ranking))
    }
  }
})
