/**get*/
let header = {'Content-Type': 'application/json'};
/*post*/
let header2 = {'Content-Type': 'application/x-www-form-urlencoded'};


/*获取所有场次信息*/
export function orderByUser(body, methods) {
    return fetch('/front/api/order/selectByUser?user=' + body.user, {method: methods, headers: header})
}