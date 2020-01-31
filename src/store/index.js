import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user' //引入 user module

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user //使用 user.js 中的 action
  }
})

