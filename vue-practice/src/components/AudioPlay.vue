<template>
    <div class="audio-container">
        <p>Reproduce la cancion</p>
        <button @click="handlePlay" class="button">Play</button>
        <button @click="repeatMusic" class="button">Repeat</button>
    </div>
    <div class="answers">
        <input placeholder="Ingresa el nombre de la cancion" />
    </div>
</template>

<script>
import { useAudio } from '@/composables/useAudio';
import cancionUrl from '@/assets/songs/roxanne.mp3';
const { loadAndPlay, repeatMusic } = useAudio()
const handlePlay = () => { loadAndPlay(cancionUrl) }
</script>

<style>
.button {
    width: 100px;
    height: 50px;
    background-color: #4c4eaf;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.input {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}
</style>