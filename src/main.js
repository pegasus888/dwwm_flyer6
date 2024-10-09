import '/node_modules/bootstrap/scss/bootstrap.scss';
import '/node_modules/bootstrap-icons/bootstrap-icons.svg';
import './assets/sass/custom.scss';
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
