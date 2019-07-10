import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Login from '@/components/pages/Login'
import Admin from '@/components/pages/Admin'
import Education from '@/components/pages/Education'
import Work from '@/components/pages/Work'
import Skill from '@/components/pages/Skill'
import Portfolio from '@/components/pages/Portfolio'
import About from '@/components/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/education',
          name: 'education',
          component: Education
        },
        {
          path: '/work',
          name: 'work',
          component: Work
        },
        {
          path: '/skill',
          name: 'skill',
          component: Skill
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          component: Portfolio
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
})
