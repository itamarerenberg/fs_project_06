import {serverConnectionPort, serverConnectionBaseUrl} from "./serverConnectionData";

export default function serverFetch(path, method = "GET", body = {}){
    return fetch(`${serverConnectionBaseUrl}:${serverConnectionPort}/${path}`, {
            method: method,
            headers: {
            'Content-Type': 'application/json'
             },
            body: JSON.stringify(body)
            })
            .then(res => {
                if (res.ok) return res.json()
                else return res.json().then(data => {throw Error(data.error)});
            })
}
