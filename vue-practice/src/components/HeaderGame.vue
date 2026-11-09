<template>
    <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/quizz">Quizz</router-link>
        <router-link to="/ranking">Ranking</router-link>
    </nav>
</template>

<style>
nav {
    background-color: #333;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
</style>