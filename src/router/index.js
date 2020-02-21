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
            // {
            //     path: '/manageHome',
            //     component: () => import(/* webpackChunkName: "home" */ '../components/manage/manageHome.vue'),
            //     meta: { title: '系统管理' },
            //     children: [
            //         // {
            //         //     path: '/user',
            //         //     component: () => import(/* webpackChunkName: "dashboard" */ '../components/manage/user.vue'),
            //         //     meta: { title: '用户管理' }
            //         // },
            //         {
            //             path: '/orders',
            //             component: () => import(/* webpackChunkName: "icon" */ '../components/manage/orders.vue'),
            //             meta: { title: '订单管理' }
            //         },
            //         {
            //             path: '/movie',
            //             component: () => import(/* webpackChunkName: "table" */ '../components/manage/movie.vue'),
            //             meta: { title: '电影管理' }
            //         },
            //         {
            //             path: '/movieInfo',
            //             component: () => import(/* webpackChunkName: "tabs" */ '../components/manage/movieInfo.vue'),
            //             meta: { title: '电影信息管理' }
            //         }
            //         ]
            //
            // }
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

