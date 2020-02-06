import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/global.css'
import ElementUi from 'element-ui'
import {Form,FormItem,Message,Button} from 'element-ui';
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

//配置请求的根路径
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';  //本地环境
// axios.interceptors.request.use(config =>{
//     console.log(config)
//     return config
// })
//设置反向代理，前端请求默认发送到http://localhost:8443/api
// axios.defaults.baseURL = "http://localhost:8444/api"
// Vue.prototype.$http=axios;

Vue.config.productionTip = false;

Vue.use(ElementUi);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.prototype.$message= Message;
Vue.use(VueImageSwipe)

Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999,
        title:false,//    显示当前图片的标题
        scalable:false,//图片是否可翻转
        rotatable:false,//图片是否可旋转
        tooltip:false,//显示缩放百分比
        navbar:false,//显示缩略图导航
        loop:false,
        loading:false

    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
