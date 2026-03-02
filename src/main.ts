// CSS Global
import '@quasar/extras/roboto-font/index.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';
import './css/app.scss';

import { createApp } from 'vue';

import {
  Loading,
  Notify,
  Quasar,
} from 'quasar';

import App from './App.vue';

const app = createApp(App)

app.use(Quasar, {
  config: {
    brand: {
      primary: '#C41E3A',
      secondary: '#FFD700',
      accent: '#8B4513'
    }
  },
  plugins: {
    Notify,
    Loading
  }
})

app.mount('#q-app')
