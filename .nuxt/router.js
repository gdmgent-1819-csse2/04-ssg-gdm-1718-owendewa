import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _d7a355b4 = () => interopDefault(import('../pages/voorbeeld_1.vue' /* webpackChunkName: "pages/voorbeeld_1" */))
const _d78726b2 = () => interopDefault(import('../pages/voorbeeld_2.vue' /* webpackChunkName: "pages/voorbeeld_2" */))
const _d76af7b0 = () => interopDefault(import('../pages/voorbeeld_3.vue' /* webpackChunkName: "pages/voorbeeld_3" */))
const _d74ec8ae = () => interopDefault(import('../pages/voorbeeld_4.vue' /* webpackChunkName: "pages/voorbeeld_4" */))
const _d73299ac = () => interopDefault(import('../pages/voorbeeld_5.vue' /* webpackChunkName: "pages/voorbeeld_5" */))
const _09e882b0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/voorbeeld_1",
      component: _d7a355b4,
      name: "voorbeeld_1"
    }, {
      path: "/voorbeeld_2",
      component: _d78726b2,
      name: "voorbeeld_2"
    }, {
      path: "/voorbeeld_3",
      component: _d76af7b0,
      name: "voorbeeld_3"
    }, {
      path: "/voorbeeld_4",
      component: _d74ec8ae,
      name: "voorbeeld_4"
    }, {
      path: "/voorbeeld_5",
      component: _d73299ac,
      name: "voorbeeld_5"
    }, {
      path: "/",
      component: _09e882b0,
      name: "index"
    }],

    fallback: false
  })
}
