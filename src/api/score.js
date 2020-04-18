import * as QS from "qs";
import axios from 'axios'

/**get*/
let header = {'Content-Type': 'application/json'};
/*post*/
let header2 = {'Content-Type': 'application/x-www-form-urlencoded'};

export function getMovieInfo(data, methods) {
    return fetch('/front/api/score/selectAll/' + data, {method: methods, headers: header})
}