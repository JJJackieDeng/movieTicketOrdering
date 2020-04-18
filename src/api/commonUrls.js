import qs from 'qs'

/**get*/
let header = {'Content-Type': 'application/json'};
/*post*/
let header2 ={'Content-Type': 'application/x-www-form-urlencoded'};

// let host = window.g.ApiUrl

export function getMovieInfo(data, methods) {
    return fetch('/front/api/movieInfo/selectOne/'+data, {method: methods,headers:header})
}
export function getInfo(data, methods) {
    return fetch('/front/api/user/selectOne/'+data, {method: methods,headers:header})
}

/*获取所有订单信息*/
// export const getALLOrders =params =>{return axios.get('${host}/api/order/selectAll',{params:params})};
export function getALLOrders(body, methods) {
    return fetch('/front/api/order/selectAll?limit='+body.limit+'&offset='+body.offset, {method: methods,headers:header2})
}

/*获取所有评分信息*/

// export const getALLOrders =params =>{return axios.get('${host}/api/order/selectAll',{params:params})};
export function getAllScore(body, methods) {
    return fetch('/front/api/score/selectAll?limit=' + body.limit + '&offset=' + body.offset, {
        method: methods,
        headers: header
    })
}

/*获取所有用户*/
export function getAllUsers(body, methods) {
    return fetch('/front/api/user/selectAll?limit=' + body.limit + '&offset=' + body.offset, {
        method: methods,
        headers: header2
    })
}
export  function getAllMovie(body,methods) {
    return fetch('/front/api/movie/selectAll?limit='+body.limit+'&offset='+body.offset, {method: methods,headers:header2})
}

//获取座位信息
export function getMoiveSeats(body, methods) {
    return fetch('/front/api/seat/selectByScheduleId?scheduleId=' + body.scheduleId, {
        method: methods,
        headers: header2
    })
}


//确认选座
export function confirmSeats(body, methods) {
    return fetch('/front/api/seat/add', {method: methods, headers: header2})
}

/*支付接口*/
export function pay(body, methods) {
    return fetch('/front/api/pay/doPay', {method: methods, headers: header2, body: qs.stringify(body)})
}