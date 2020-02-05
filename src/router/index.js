import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/components/login";
import home from "@/components/home";
import Test from "@/components/Test";
import showDetail from "@/components/pages/showDetail";
import purchaseDetail from "@/components/pages/purchaseDetail";
import manageHome from "@/components/manage/manageHome";


Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: home
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
        },
        {
            path: '/manageHome',
            component: manageHome
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

