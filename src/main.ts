import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import './style.css'

import App from './App.vue'
import Typewriter from './components/Typewriter.vue';
import Home from './pages/home.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
);

const app = createApp(App) ;
app.component('Typewriter', Typewriter)
app.use(router)
app.use(PrimeVue)
app.mount('#app');
