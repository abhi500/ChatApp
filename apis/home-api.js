const axios = require('axios').default;

export async function send(url, payload) {
    return axios({
        method: 'POST',
        url: url,
        data: payload
    })
}

export async function receive(url, query) {
    return axios({
        method: 'GET',
        url: url,
        params: query
    })
}