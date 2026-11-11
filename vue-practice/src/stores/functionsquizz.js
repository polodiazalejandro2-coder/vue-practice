import { defineStorere } from "pinia";
import { ref, computed } from 'vue'

export const useFunctionsQuizzStore = defineStore('functionsquizz', () => {
    let jugador = ref('');
    let rondaActual = ref(1);
    let aciertos = ref(0);
    let fallos = ref(0);
    const opcionesPorRonda = ref(4);
    const totalRondas = ref(5);
})


