import Vue from 'vue'
import Router from 'vue-router'
import gameIndex from '@/views/games/gameIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/gameIndex'
    },

    {
      path: '/gameIndex',
      name: 'gameIndex',
      component: gameIndex
    }
  ]
})
