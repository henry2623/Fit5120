// src/router/index.js (or index.ts)
import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AccessDeniedView from '../views/AccessDeniedView.vue'

import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import GetAllBookAPI from '../views/GetAllBookAPI.vue'
import Addbook from '../views/Addbook.vue'
import WeatherView from '../views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView, meta: { public: true } },
    { path: '/about', name: 'About', component: AboutView, meta: { requiresAuth: true } },

    { path: '/denied', name: 'AccessDenied', component: AccessDeniedView, meta: { public: true } },
    { path: '/FireLogin', name: 'FireLogin', component: FirebaseSigninView, meta: { public: true } },
    { path: '/FireRegister', name: 'FireRegister', component: FirebaseRegisterView, meta: { public: true } },

    { path: '/getbook', name: 'GetBook', component: GetBookCountView, meta: { public: true } },
    { path: '/GetAllBookAPI', name: 'GetAllBookAPI', component: GetAllBookAPI, meta: { public: true } },

    { path: '/Addbook', name: 'Addbook', component: Addbook, meta: { public: true } },

    { path: '/WeatherCheck', name: 'WeatherCheck', component: WeatherView, meta: { public: true } },

    // keep a single catch-all at the end
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()

  // Wait for Firebase Auth state (and unsubscribe immediately)
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    unsubscribe()

    // Public routes always allowed
    if (to.meta.public) return next()

    // Require auth?
    if (to.meta.requiresAuth && !user) {
      return next({ name: 'FireLogin', query: { redirect: to.fullPath } })
    }

    // Role-gated?
    if (to.meta.roles) {
      let role = 'user'
      if (user?.email === 'admin@example.com') role = 'admin'
      else if (user?.email === 'manager@example.com') role = 'manager'

      if (!to.meta.roles.includes(role)) {
        return next({ name: 'AccessDenied' })
      }
    }

    next()
  })
})

export default router
