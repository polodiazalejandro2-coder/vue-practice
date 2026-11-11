import { Howl } from 'howler'
import { ref } from 'vue'
 
export function useAudio() {
  const sound = ref(null)
  const loadAndPlay = (audioSrc) => {
    if (sound.value) {
      sound.value.unload()
    }

    sound.value = new Howl({
      src: [audioSrc],
      html5: true,
      loop: false 
    })

    sound.value.play()
  }

  const startMusic = () => {
    if (sound.value && !sound.value.playing()) {
      sound.value.play()
    }
  }

  const repeatMusic = (shouldLoop = true) => {
    if (sound.value) {
      sound.value.loop(shouldLoop)
    }
  }

  const stopMusic = () => {
    if (sound.value) {
      sound.value.stop()
    }
  }

  return {
    sound,
    loadAndPlay,
    startMusic,
    repeatMusic,
    stopMusic
  }
}