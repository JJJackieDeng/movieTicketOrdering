let header = {'Content-Type': 'application/json'}

export function getInfo(data, methods) {
    return fetch('/api/user/selectOne/'+data, {method: methods,headers:header})
}