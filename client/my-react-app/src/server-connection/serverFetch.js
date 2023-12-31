import { options } from "joi";
import {serverConnectionPort, serverConnectionBaseUrl} from "./serverConnectionData";

export default function serverFetch(path, method = "GET", body = {}){
    options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
    }
    if (method !== "GET" && body !== {}){
        options.body = JSON.stringify(body);
    }
    return fetch(`${serverConnectionBaseUrl}:${serverConnectionPort}/${path}`, options)
            .then(res => {
                if (res.ok) return res.json()
                else return res.json().then(data => {throw Error(data.error)});
            })
}
