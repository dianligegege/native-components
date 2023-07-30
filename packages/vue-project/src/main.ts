import './assets/main.css'
import { applyPolyfills, defineCustomElements } from 'sten-components/loader/index';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
applyPolyfills().then(() => {
  defineCustomElements(window);
});
