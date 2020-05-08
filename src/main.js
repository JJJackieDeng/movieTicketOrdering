import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import ElementUi, {Button, Form, FormItem, Message} from 'element-ui'
import axios from 'axios'
import Qs from 'qs';

import md5 from 'js-md5';
// 引入echarts
/*时间格式化组件*/
import moment from 'moment'
//自适应屏幕大小
// import 'lib-flexible/flexible'
/*
import {Input} from "element-ui";
*/
//导入message弹窗
import '../node_modules/element-ui/lib/theme-chalk/index.css'
//导入字体图标
import '../src/assets/font/iconfont.css'
//预览图片支持
import VueImageSwipe from 'vue-image-swipe'
import 'vue-image-swipe/dist/vue-image-swipe.css'
//导入viewerjs
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//国家行政
import VueAreaLinkage from 'vue-area-linkage';
import 'vue-area-linkage/dist/index.css';

Vue.use(VueAreaLinkage);

//配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8081/api/';  //本地环境
axios.interceptors.request.use(config => {
    console.log(config)
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})

Vue.config.productionTip = false;
Vue.use(ElementUi);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.prototype.$message = Message;
Vue.use(VueImageSwipe);
//md5
Vue.prototype.$md5 = md5;

Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999,
        title: false,//    显示当前图片的标题
        scalable: false,//图片是否可翻转
        rotatable: false,//图片是否可旋转
        tooltip: false,//显示缩放百分比
        navbar: false,//显示缩略图导航
        loop: false,
        loading: false

    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

//全局过滤器
Vue.filter('dateFmt', (input, formatString = "YYYY-MM-DD") => {
    //es5函数参数设置默认值
    //const lastFormatString = formatString ||


    return moment(input).format(formatString)
});


// // 挂载路由导航守卫,不需要进行登录便可以浏览一些界面
router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem('token');
    console.log(token)
    /*未登录时可以访问的路径*/
    if (token || to.path.indexOf('/login') !== -1 || to.path.indexOf('/home') !== -1
        || to.path.indexOf('/showDetail') !== -1 || to.path.indexOf('/forgotPass') !== -1
        || to.path.indexOf('/register') !== -1) {
        next()
    } else {
        next('/login')
    }
});


Vue.prototype.qsParam = function (data) {
    return Qs.stringify(data);
};

//axios通用请求
Vue.prototype.request = function (method, url, data, headers) {
    axios({
        method: method,
        url: url,
        data: this.qsParam(data),
        headers: headers
    }).then(res => {
        console.log(res);
        this.res = res;
    });

    return this.res;
};

Vue.prototype.qsParam = function (data) {
    return Qs.stringify(data);
};



