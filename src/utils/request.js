// import axios from 'axios' //引入 axios
// import baseUrl from '../api/baseUrl' //使用环境变量 + 模式的方式定义基础URL
//
// // 创建 axios 实例
// const service ={
// }
//
// export default service


import axios from 'axios';

// let ip = "localhost";
let ip = "localhost";
//线上环境
// let ip = "47.116.19.145";
let port = "8081";

let prefix = "http://" + ip + ':' + port + "/";

export function request(config) {
    const instance = axios.create({
        baseURL: prefix,
        timeout: 100000
    });

    return instance(config);

}