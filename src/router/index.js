import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home'
import Login from '@/components/pages/Login'
import Admin from '@/components/pages/Admin'
import Service from '@/components/pages/homeComponents/Carousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/service',
          name: 'service',
          component: Service
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
  ]
})
