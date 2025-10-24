import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";
import { createApp } from 'vue'
import { createPinia } from 'pinia'   
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


const firebaseConfig = {
  apiKey: "AIzaSyD3dKDQA4o3hx4qMcBd8eZX4c1o7hnD-To",
  authDomain: "week7-lokhin.firebaseapp.com",
  projectId: "week7-lokhin",
  storageBucket: "week7-lokhin.firebasestorage.app",
  messagingSenderId: "434042942040",
  appId: "1:434042942040:web:16b851bc917d3cba70902d"
};


initializeApp(firebaseConfig);


const vueApp = createApp(App);


vueApp.use(createPinia());
vueApp.use(router);
vueApp.use(PrimeVue, { ripple: true });





vueApp.mount('#app');
