import * as QS from "qs";
import axios from 'axios'

/**get*/
let header = {'Content-Type': 'application/json'};
/*post*/
let header2 = {'Content-Type': 'application/x-www-form-urlencoded'};

/*根据id删除用户*/
export function deleteUser(data, methods) {
    return fetch('/front/api/user/deleteById', {
        method: methods,
        headers: header2,
        data: JSON.stringify(data)
    })
}

/*根据userID获取用户*/
export function selectUserByID(body, methods) {
    return fetch('/front/api/user/selectOne?id=' + body.id, {
        method: methods,
        headers: header
    })
}