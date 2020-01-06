import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/global.css'
import ElementUi from 'element-ui'
import {Form,FormItem,Message,Button} from 'element-ui';
//自适应屏幕大小
import 'lib-flexible/flexible'
/*
import {Input} from "element-ui";
*/
//导入message弹窗
import '../node_modules/element-ui/lib/theme-chalk/index.css'
//导入字体图标
import '../src/assets/font/iconfont.css'

import axios from 'axios'
//配置请求的根路径
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';  //本地环境
//设置反向代理，前端请求默认发送到http://localhost:8443/api
axios.defaults.baseURL = "http://localhost:8444/api"
Vue.prototype.$http=axios;

Vue.config.productionTip = false;

Vue.use(ElementUi);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.prototype.$message= Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
