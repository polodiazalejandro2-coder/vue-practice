<template>
  <div class="audio-player">
    <button class="play-btn" @click="reproducirFragmento">
      <span v-if="!sonando">[ Reproducir Cancion (5s) ]</span>
      <span v-else>[ Reproduciendo... ]</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Howl } from 'howler'

const props = defineProps({
  audioSrc: {
    type: String,
    required: true
  }
})

const sonando = ref(false)
let sound = null
let temporizador = null

function detenerAudio() {
  if (sound) {
    sound.stop()
  }
  if (temporizador) {
    clearTimeout(temporizador)
    temporizador = null
  }
  sonando.value = false
}

function reproducirFragmento() {
  detenerAudio()

  if (!props.audioSrc) return

  sound = new Howl({
    src: [props.audioSrc],
    html5: true,
    format: ['mp3']
  })

  sound.play()
  sonando.value = true

  temporizador = setTimeout(() => {
    detenerAudio()
  }, 5000)
}

onMounted(() => {
  reproducirFragmento()
})

onUnmounted(() => {
  detenerAudio()
  if (sound) {
    sound.unload()
  }
})

defineExpose({
  detenerAudio
})
</script>

<style scoped>
.audio-player {
  margin: 1.5rem 0;
  width: 100%;
}

.play-btn {
  width: 100%;
  padding: 0.9rem;
  background-color: #242424;
  border: 1px solid #444444;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
}

.play-btn:hover {
  background-color: #333333;
  border-color: #666666;
}
</style>
