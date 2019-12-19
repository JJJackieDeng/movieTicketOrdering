import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/global.css'
import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
//导入字体图标
import '../src/assets/font/iconfont.css'

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'http://localhost:8080'  //本地环境
Vue.prototype.$http=axios

Vue.config.productionTip = false

Vue.use(ElementUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
