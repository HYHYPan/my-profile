import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Curtain from '@/components/pages/Curtain'
// import Admin from '@/components/pages/Admin'
import Education from '@/components/pages/Education'
import Work from '@/components/pages/Work'
import Skill from '@/components/pages/Skill'
import Portfolio from '@/components/pages/Portfolio'
import About from '@/components/pages/About'
import OverView from '@/components/pages/work-pages/OverView'
import ProgramDesigner from '@/components/pages/work-pages/ProgramDesigner'
import AccountManager from '@/components/pages/work-pages/AccountManager'
import PatentParalegal from '@/components/pages/work-pages/PatentParalegal'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'curtain',
          component:Curtain, 
        },
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
          component: Work,
          children:[
            {
              path: '/',
              name: 'overview',
              component: OverView
            },
            {
              path: 'program-designer',
              name: 'program-designer',
              component: ProgramDesigner
            },
            {
              path: 'account-manager',
              name: 'account-manager',
              component: AccountManager
            },
            {
              path: 'patent-paralegal',
              name: 'patent-paralegal',
              component: PatentParalegal
            },
          ]
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
  ]
})
