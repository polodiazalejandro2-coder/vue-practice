import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";
import QuizzView from "@/views/QuizzView.vue";
import RankingGame from "@/views/RankingGame.vue";


const router = createRouter({
  history: createWebHistory (import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView 
    },
    {
      path: '/quizz',
      name: 'quizz',
      component: QuizzView
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingGame
    }
  ]
})

export default router 