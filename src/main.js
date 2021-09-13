import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Portfolio from './components/Portfolio.vue'
import Project from './components/Project.vue'
import NotFound from './components/NotFound.vue'

const routes = [
  {
    path: '/',
    name:'Portfolio',
    component: Portfolio
  },
  { 
    path: '/portfolio/:project', 
    name: 'Article',
    component: Project
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


const app = createApp(App)
app.use(router)
app.mount('#app')
