import qs from 'qs'

/**get*/
let header = {'Content-Type': 'application/json'};
/*post*/
let header2 = {'Content-Type': 'application/x-www-form-urlencoded'};

//获取座位信息
export function getMoives(data, methods) {
    return fetch('/front/api/movieInfo/queryLikeName?movieName=' + data, {
        method: methods,
        headers: header
    }).then(res => {
        return res.json()
    })
}