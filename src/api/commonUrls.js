let header = {'Content-Type': 'application/json'}

export function getInfo(data, methods) {
    return fetch('/api/user/selectOne/'+data, {method: methods,headers:header})
}

// //登录接口
// export function dologin(data, methods) {
//     return fetch('/api/user/dologin', {method: methods,data:JSON.stringify(data),headers:header,})
// }