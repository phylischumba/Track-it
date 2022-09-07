import baseUrl from "./config";

export const request = async (method = 'GET', url, param, data) => {

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


    let response = await fetch(mainUrl, settings);
    return response.json()
}