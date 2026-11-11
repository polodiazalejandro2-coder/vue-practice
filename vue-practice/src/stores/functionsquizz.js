import { defineStorere } from "pinia";
import { ref, computed } from 'vue'

export const useFunctionsQuizzStore = defineStore('functionsquizz', () => {
    let jugador = [''];
    let preguntasTotales = [];
    let preguntasJuego = [];
    let preguntasFalladas = [];
    let rondaActual = 1;
    let aciertos = 0;
    let fallos = 0;
    const opcionesPorRonda = 4;
