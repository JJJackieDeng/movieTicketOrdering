/**get*/
let header = {'Content-Type': 'application/json'};
/*post*/
let header2 = {'Content-Type': 'application/x-www-form-urlencoded'};


/*获取所有场次信息*/
export function AllSchedule(body, methods) {
    return fetch('/front/api/schedule/selectAll?limit=' + body.limit + '&offset=' + body.offset, {
        method: methods,
        headers: header
    })
}

/*根据日期与movie_id获取场次信息*/
export function AllScheduleByDate(body, methods) {
    return fetch('/front/api/schedule/queryByDate?dateStr=' + body.dateStr + '&movie_id=' + body.movie_id, {
        method: methods,
        headers: header
    })
}

/*根据日期与movie_id获取场次信息*/
export function deleteSchedule(body, methods) {
    return fetch('/front/api/schedule/deleteById?id=' + body.id, {method: methods, headers: header2})
}