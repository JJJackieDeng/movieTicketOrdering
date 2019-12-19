import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/components/Login";
import Main from  "@/components/Main"

Vue.use(VueRouter)

export default new VueRouter({
 /* mode: history, //去除#*/
  routes:[
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect:'/Main'
    },
    {
      path: '/main',
      component: Main
    }
  ]
})
