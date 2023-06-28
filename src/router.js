import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Research from './components/Service.vue'
import Award from './components/Award.vue'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/research',
      name: 'research',
      component: Research
    },
    {
      path: '/award',
      name: 'award',
      component: Award
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return to.hash ? {selector: to.hash, offset:{x: 0, y: 64}} : {x: 0, y: 0}
  }
})