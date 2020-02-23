import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/components/login";
import home from "@/components/home";
import Test from "@/components/Test";
import showDetail from "@/components/pages/showDetail";
import purchaseDetail from "@/components/pages/purchaseDetail";
import dashboard from '@/components/manage/dashboard'
import page1 from '@/components/manage/page1'
import page2 from '@/components/manage/page2'
import manageHome from "@/components/manage/manageHome";
import user from "@/components/manage/user";
import movieInfo from "@/components/manage/movieInfo";
import movie from "@/components/manage/movie";
import orders from "@/components/manage/orders";
import register from "../components/pages/register";


Vue.use(VueRouter);




export default new VueRouter({
        mode: 'history',
        routes:[
            {
                path: '/dashboard',
                component: dashboard,
                children:[
                    {
                        path: 'user',
                        name:'user',
                        component: user
                    },
                    {
                        path: 'movie',
                        name:'movie',
                        component: movie
                    },                    {
                        path: 'movieInfo',
                        name:'movieInfo',
                        component: movieInfo
                    },                    {
                        path: 'orders',
                        name:'orders',
                        component: orders
                    },
                ]
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/register',
                component: register
            },
            {
                path: '/',
                component: home
            },
            {
                path: '/home',
                component: home
            },
            // {
            //     path: '/test',
            //     component: Test
            // },
            {
                path: '/showDetail',
                component: showDetail
            },
            {
                path: '/purchaseDetail',
                component: purchaseDetail
            },

        ]


//挂载路由导航守卫
// router.beforeEach((to,from,next)=>{
//     //to代表即将访问的路径，from表示从哪个路径跳转而来，next表示放行
//     if(to.path === '/login') return next();
//     //获取token
//     const tokenStr = window.sessionStorage.getItem('token');
//     if(!tokenStr) return next('/login'); //用户没有登录,强制跳转到登录页面
//     next()
// });
})

