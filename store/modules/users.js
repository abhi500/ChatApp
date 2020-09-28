const { users } = require('../../apis/users-api');

//state
const state = {
    users: []
}

//getters
const getters = {

    /**
     * return users
     */
    getUsers: (state) => {
        return state.users;
    }
}

//actions
const actions = {
    getUsers: ({commit}) => {
        users('http://localhost:3000/api/v1/users')
        .then(res => res.data)
        .then(res => {
            commit('users', res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}

//mutations
const mutations = {
    users: (state, users) => {
        state.users = users
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}