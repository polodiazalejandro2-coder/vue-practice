import {defineStore} from 'pinia';
import songsData from '..songs.json';

export const useGameStore = defineStore('game', {
  state: () => ({
    songs: songsData,
    currentSongIndex: 0,
    score: 0,
    isGameOver: false,
    isGameStarted: false,
  }),
  actions: {
    startGame() {
      this.isGameStarted = true;
      this.currentSongIndex = 0;
      this.score = 0;
      this.isGameOver = false;
    }
  }
});