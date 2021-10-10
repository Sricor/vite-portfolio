import App from './App.vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// pages
import Home from './pages/Home.vue'
//import NotFound from './pages/NotFound.vue'
import VentHub from './pages/VentHub.vue'

// https://next.router.vuejs.org/
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name:'Portfolio', component: Home},
    {path: '/:pathMatch(.*)*', name: 'Home', component: Home},
    {path: '/portfolio/ventHub', name:'VentHub', component: VentHub},
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
