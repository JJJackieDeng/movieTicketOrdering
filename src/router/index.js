import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/components/login";
import home from "@/components/home";
import Test from "@/components/Test";
import showDetail from "@/components/pages/showDetail";
import purchaseDetail from "@/components/pages/purchaseDetail";


Vue.use(VueRouter);

// export default new VueRouter({
//   routes:[
//     {
//       path: '/login',
//       component: Login
//     },
//     {
//       path: '/',
//       redirect:'/login'
//     },
//     {
//       path: '/home',
//       component: home
//     }
//   ]
// })
const router = new VueRouter({
    routes:[
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: home
/*            redirect:'/Main'*/
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/test',
            component: Test
        },
        {
            path: '/showDetail',
            component: showDetail
        },
        {
            path: '/purchaseDetail',
            component: purchaseDetail
        }
    ]
});

//挂载路由导航守卫
// router.beforeEach((to,from,next)=>{
//     //to代表即将访问的路径，from表示从哪个路径跳转而来，next表示放行
//     if(to.path === '/login') return next();
//     //获取token
//     const tokenStr = window.sessionStorage.getItem('token');
//     if(!tokenStr) return next('/login'); //用户没有登录,强制跳转到登录页面
//     next()
// });

export default router

