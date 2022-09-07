import baseUrl from "./config";

export const request = (method = 'GET', url, param, data) => {

    const settings = {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    }

    if (data) {
        settings.body = JSON.stringify(data);
    }

    let mainUrl = baseUrl + url;
    if (param) {
        mainUrl += '?' + param
    }


    return fetch(mainUrl, settings)
}