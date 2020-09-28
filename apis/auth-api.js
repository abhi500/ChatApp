const axios = require('axios').default;

export async function login(url, auth) {
    return axios({
        method: 'post',
        url: url,
        params: {
            email: auth.email,
            password: auth.password
        }
    })
}

export async function register(url, auth) {
    return axios({
        method: 'post',
        url: url,
        params: {
            name: auth.name,
            email: auth.email,
            password: auth.password
        }
    })
}