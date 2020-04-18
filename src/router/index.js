import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/components/login";
import home from "@/components/home";
import Test from "@/components/Test";
import showDetail from "@/components/pages/showDetail";
import purchaseDetail from "@/components/pages/purchaseDetail";
import dashboard from '@/components/manage/dashboard'
import manageHome from "@/components/manage/manageHome";
import user from "@/components/manage/user";
import score from "../components/manage/score";
import movie from "@/components/manage/movie";
import orders from "@/components/manage/orders";
import register from "../components/pages/register";
import cinema from "../components/manage/cinema";
import schedule from "../components/manage/schedule";
import personal from "../components/pages/personal";
import myOrders from "../components/pages/myOrders";
import myInfo from "../components/pages/myInfo";
import Test1 from "../components/test/Test1";


Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            component: dashboard,
            children: [
                {
                    path: 'manageHome',
                    name: 'manageHome',
                    component: manageHome
                },
                {
                    path: 'user',
                    name: 'user',
                    component: user
                },
                {
                    path: 'movie',
                    name: 'movie',
                    component: movie
                },
                {
                    path: 'orders',
                    name: 'orders',
                    component: orders
                },
                {
                    path: 'cinema',
                    name: 'cinema',
                    component: cinema
                },
                {
                    path: 'score',
                    name: 'score',
                    component: score
                },
                {
                    path: 'schedule',
                    name: 'schedule',
                    component: schedule
                },
            ]
        },
        {
            path: '/personal',
            component: personal,
            children: [
                {
                    path: 'myOrders',
                    name: 'myOrders',
                    component: myOrders
                },
                {
                    path: 'myInfo',
                    name: 'myInfo',
                    component: myInfo
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
        {
            path: '/test',
            component: Test
        },
        {
            path: '/test1',
            component: Test1
        },
        {
            path: '/showDetail/:mid',
            props: true,
            component: showDetail
        },
        {
            path: '/purchaseDetail/:mid',
            props: true,
            component: purchaseDetail
        },


    ],


})

