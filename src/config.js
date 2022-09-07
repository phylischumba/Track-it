const env = 'prod';
const environments = {
    dev: 'http://127.0.0.1:3000 ',
    prod: 'http://67.205.165.162/api/v1'
}

let endpoints = [
    {
        login: '/login', method: 'post'
    },
    {
        meetings: '/meeting', method: 'get'
    },
    {
        meetings: '/meeting', method: 'post'
    },
    {
        charges: '/charges', method: 'post'
    },
    {
        charges: '/charges', method: 'get'
    }
]
// 422 validations
// 200

const baseUrl = environments[env];

export default baseUrl;