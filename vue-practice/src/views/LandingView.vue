<template>
    <h1>Bienvenido al juego</h1>
    <input placeholder="Ingresa tu nombre" />
    <button @click="startGame" class="button">Iniciar juego</button>
</template>
<script setup>
const startGame = () => {
    console.log('Juego iniciado');
}
</script>
<style scoped>
.input {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
}
</style>