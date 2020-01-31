//引入登录API
import { login } from '@/api/login'

const user = {
    actions: {
        //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
        Login({ commit },userInfo){
            const username = userInfo.username.trim()
            //封装一个promise
            return new Promise((resolve,reject )=> {
                //使用login接口进行网络请求
                login(username,userInfo.password).then(response =>{
                    //提交一个 mutation，通知状态改变
                    commit('')
                    //将结果封装到Promise
                    resolve(response)
                }).catch(error =>{
                    reject(error)
                })
            })
        },
    }
}

export default user