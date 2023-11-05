import { createApp } from 'vue'

import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import './style.css'

import App from './App.vue';
import Typewriter from '@/components/Typewriter.vue';
import router from '@/router/router.ts';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(faGithub)
library.add(faLinkedinIn)
library.add(faYoutube)

const app = createApp(App) ;
app.component('Typewriter', Typewriter)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(PrimeVue)
app.mount('#app');
