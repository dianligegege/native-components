import './assets/main.css'
import { applyPolyfills, defineCustomElements } from '@loganzhang/sten-components/loader';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
applyPolyfills().then(() => {
  defineCustomElements(window);
});
