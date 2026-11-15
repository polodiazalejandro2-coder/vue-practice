<template>
  <div class="app-layout">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #121212;
}

.main-content {
  flex: 1;
  width: 100%;
}
</style>
