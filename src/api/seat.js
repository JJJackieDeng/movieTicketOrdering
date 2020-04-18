/**get*/
let header = {'Content-Type': 'application/json'};
/*post*/
let header2 = {'Content-Type': 'application/x-www-form-urlencoded'};

/*根据场次ID获取该场次座位信息*/
export function querySeatById(body, methods) {
    return fetch('/front/api/seat/selectByScheduleId?scheduleId=' + body.scheduleId, {method: methods, headers: header})
}