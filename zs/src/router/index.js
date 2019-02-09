import Vue from 'vue'
import Router from 'vue-router'
import order from '@/components/order'
import index from '@/components/index'
import introduce from '@/components/introduce'
import rmeeting from '@/components/rmeeting'
import traffic from '@/components/traffic'
import pictures from '@/components/pictures'
import around from '@/components/around'
import comment from '@/components/comment'
import rooms from '@/components/booking'

Vue.use(Router)


export default new Router({
  routes: [
    {path: '/',component: index},
    {path: '/order',component: order},
    {path: '/index',component: index},
    {path: '/introduce',component: introduce},
    {path: '/rmeeting',component: rmeeting},
    {path: '/traffic',component: traffic},
    {path: '/pictures',component: pictures},
    {path: '/around',component: around},
    {path: '/comment',component: comment},
    {path: '/rooms',component: rooms},
  ]
})
