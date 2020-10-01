const axios = require('axios').default;

export async function users(url, token) {
    return axios({
        method: 'get',
        url: url,
        headers: {
            authorization: `Bearer ${token}`
        }
    })
}
