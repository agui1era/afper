import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a86f028 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _4d02afe6 = () => interopDefault(import('../pages/login/callback.vue' /* webpackChunkName: "pages/login/callback" */))
const _08a16aaf = () => interopDefault(import('../pages/login/claveunica.vue' /* webpackChunkName: "pages/login/claveunica" */))
const _443124a2 = () => interopDefault(import('../pages/tramites/38913/index.vue' /* webpackChunkName: "pages/tramites/38913/index" */))
const _497ce8b8 = () => interopDefault(import('../pages/tramites/5220/index.vue' /* webpackChunkName: "pages/tramites/5220/index" */))
const _6d5ef1a2 = () => interopDefault(import('../pages/tramites/5220/CartolaStj.vue' /* webpackChunkName: "pages/tramites/5220/CartolaStj" */))
const _36b789fa = () => interopDefault(import('../pages/tramites/38913/_num.vue' /* webpackChunkName: "pages/tramites/38913/_num" */))
const _427209d1 = () => interopDefault(import('../pages/tramites/5220/_num.vue' /* webpackChunkName: "pages/tramites/5220/_num" */))
const _e60a6740 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/logout",
    component: _6a86f028,
    name: "logout"
  }, {
    path: "/login/callback",
    component: _4d02afe6,
    name: "login-callback"
  }, {
    path: "/login/claveunica",
    component: _08a16aaf,
    name: "login-claveunica"
  }, {
    path: "/tramites/38913",
    component: _443124a2,
    name: "tramites-38913"
  }, {
    path: "/tramites/5220",
    component: _497ce8b8,
    name: "tramites-5220"
  }, {
    path: "/tramites/5220/CartolaStj",
    component: _6d5ef1a2,
    name: "tramites-5220-CartolaStj"
  }, {
    path: "/tramites/38913/:num",
    component: _36b789fa,
    name: "tramites-38913-num"
  }, {
    path: "/tramites/5220/:num",
    component: _427209d1,
    name: "tramites-5220-num"
  }, {
    path: "/",
    component: _e60a6740,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
