import { createApp } from 'vue'
import App from './App.vue'
import './styles/styles.scss'

import FontAwesomeIcon from "./services/fontawesome.js";

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
