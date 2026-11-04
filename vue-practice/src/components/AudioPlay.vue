<template>
    <div class="audio-container">
        <audio ref="audio" :src="audioSrc" @ended="onAudioEnded"></audio>
    <p>Reproduce la cancion</p>
    <button @click="startmusic" class="button">Play</button>
    <button @click="repeatmusic" class="button">Repeat</button>
    </div>
    <div class="answers">
        <input placeholder="Ingresa el nombre de la cancion" />
    </div>
</template>

<script>
import { stop } from 'vue';


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