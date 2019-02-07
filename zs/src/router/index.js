import Vue from 'vue'
import Router from 'vue-router'
import order from '@/components/order'

Vue.use(Router)


export default new Router({
  routes: [
    {path: '/',component: order},
    {path: '/order',component: order},
  ]
})
