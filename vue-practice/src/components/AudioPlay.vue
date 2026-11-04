<template>
    <p>Reproduce la cancion</p>
    <button @click = "startmusic" class = "button">Play</button>
    <input class="input" placeholder="Ingresa el nombre de la cancion"/>
</template>

<script>
import {Howl} from 'howler';
import startmusic from 'vue-practice\src\stores\functionsquiz.js'
</script>

<style>
.button{
    width: 100px;
    height: 50px;
    background-color: #4c4eaf;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>