const axios = require('axios').default;

export async function users(url) {
    return axios({
        method: 'get',
        url: url,
    })
}
