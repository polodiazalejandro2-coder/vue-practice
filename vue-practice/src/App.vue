<script setup>
import { RouterView } from 'vue-router';
import HeaderGame from '@/components/HeaderGame.vue';
</script>

<template>
  <header>
    <HeaderGame />
  </header>
  <main>
    <RouterView />
  </main>
</template>


<style scoped></style>
