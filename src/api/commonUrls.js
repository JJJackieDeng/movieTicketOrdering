import * as QS from "qs";
import axios from 'axios'
/**get*/
let header = {'Content-Type': 'application/json'};
/*post*/
let header2 ={'Content-Type': 'application/x-www-form-urlencoded'};

// let host = window.g.ApiUrl

export function getMovieInfo(data, methods) {
    return fetch('/api/movieInfo/selectOne/'+data, {method: methods,headers:header})
}
export function getInfo(data, methods) {
    return fetch('/api/user/selectOne/'+data, {method: methods,headers:header})
}

// //登录接口
// export function dologin(data, methods) {
//     return fetch('/api/user/dologin', {method: methods,data:JSON.stringify(data),headers:header,})
// }

export function getAllUsers(body, methods) {
    return fetch('/api/user/selectAll?limit='+body.limit+'&offset='+body.offset, {method: methods,headers:header2})
}
/*获取所有订单信息*/
// export const getALLOrders =params =>{return axios.get('${host}/api/order/selectAll',{params:params})};
export function getALLOrders(body, methods) {
    return fetch('/api/order/selectAll?limit='+body.limit+'&offset='+body.offset, {method: methods,headers:header2})
}