import * as QS from "qs";
import axios from 'axios'

/**get*/
let header = {'Content-Type': 'application/json'};
/*post*/
let header2 = {'Content-Type': 'application/x-www-form-urlencoded'};
/*获取所有订单信息*/

// export const getALLOrders =params =>{return axios.get('${host}/api/order/selectAll',{params:params})};
export function getAllCinema(body, methods) {
    return fetch('/front/api/cinema/selectAll?limit=' + body.limit + '&offset=' + body.offset, {
        method: methods,
        headers: header
    })
}

/*删除影院*/
export function deleteCinema(data, methods) {
    return fetch('/front/api/cinema/delete/' + data, {
        method: methods,
        headers: header
    })
}