import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/components/Login";
import Main from  "@/components/Main";


Vue.use(VueRouter);

/*
export default new VueRouter({
 /!* mode: history, //去除#*!/
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
*/
const router = new VueRouter({
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
});

//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
    //to代表即将访问的路径，from表示从哪个路径跳转而来，next表示放行
    if(to.path === '/login') return next();
    //获取token
    const tokenStr = window.sessionStorage.getItem('token');
    if(!tokenStr) return next('/login'); //用户没有登录,强制跳转到登录页面
    next()
});

export default router

