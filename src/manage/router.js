import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login/login.vue')
    },
    {
      path: '/ads/list',
      name: 'adseList',
      component: () => import(/* webpackChunkName: "schemeList" */ './views/ads/list.vue')
    },
    {
      path: '/ads/detail/:id',
      name: 'adsDetail',
      component: () => import(/* webpackChunkName: "schemeDetail" */ './views/ads/detail.vue')
    },
    {
      path: '/ads/add',
      name: 'adsAdd',
      component: () => import(/* webpackChunkName: "schemeDetail" */ './views/ads/add.vue')
    },
    {
      path: '/ads/edit/:id',
      name: 'adsEdit',
      component: () => import(/* webpackChunkName: "schemeDetail" */ './views/ads/edit.vue')
    },
    {
      path: '/cbs/list',
      name: 'cbsList',
      component: () => import(/* webpackChunkName: "schemeDetail" */ './views/cbs/list.vue')
    },
    {
      path: '/cbs/list',
      name: 'cbsList',
      component: () => import(/* webpackChunkName: "schemeDetail" */ './views/cbs/detail.vue')
    }

  ]
})