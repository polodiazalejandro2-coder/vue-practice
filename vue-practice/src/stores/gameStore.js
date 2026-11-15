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

      const cancionesMezcladas = [...songsData].sort(() => Math.random() - 0.5)

      this.preguntas = cancionesMezcladas.map((cancion) => {
        const opcionesMezcladas = [...cancion.options].sort(() => Math.random() - 0.5)
        return {
          ...cancion,
          options: opcionesMezcladas
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
      const fecha = new Date().toLocaleDateString('es-ES')
      const partida = {
        nombre: this.nombreJugador,
        puntos: this.puntos,
        aciertos: this.aciertos,
        fecha: fecha
      }

      this.ranking.push(partida)
      this.ranking.sort((a, b) => b.puntos - a.puntos)
      localStorage.setItem('ranking', JSON.stringify(this.ranking))
    },

    cargarRanking() {
      const guardado = localStorage.getItem('ranking')
      if (guardado) {
        this.ranking = JSON.parse(guardado)
      }
    }
  }
})
