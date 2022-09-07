import { request } from "./default";

const methods = {};


methods.get = function (url, param) {
    return request('GET', url, param)
}

methods.post = function (url, data, param) {
    return request('POST', url, param, data)
}

methods.update = function (url, data, param) {
    return request('PUT', url, param, data)
}

methods.patch = function (url, data, param) {
    return request('PATCH', url, param, data);
}

methods.delete = function (url, param) {
    return request('DELETE', url, param);
}

export default methods;