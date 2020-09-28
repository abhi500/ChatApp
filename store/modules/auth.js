const { login, register } = require('../../apis/auth-api');

//state
let state = {
    user: null,
    token: null,
    error: null,
}

//get state
const getters = {
    //get user
    getUser: (state) => {
        return state.user ? state.user : localStorage.getItem('user');
    },

    //get token
    getToken: (state) => {
        return state.token ? state.token : localStorage.getItem('token');
    },

    getError: (state) => {
        return state.error
    }
}

//call apis and mutations to change state
const actions = {
    login({commit}, user) {
        login('http://localhost:3000/api/v1/auth/login', user)
        .then(res => res.data)
        .then(res => {
            console.log(res)
            if(res.status){
                commit('setUser', res.data.user);
                commit('setToken',  res.data.token)
                this.$router.push('/');
            }
            else
                commit('setError', { message:res.message, error: res.error})
        })
        .catch(err => {
            commit('setError', err)
        })
    },

    register({commit}, user) {
        register('http://localhost:3000/api/v1/auth/register', user)
        .then(res => res.data)
        .then(res => {
            console.log(res)
            if(res.status){
                commit('setUser', res.data.user);
                commit('setToken',  res.data.token)
                this.$router.push('/');
            }
            else
                commit('setError', { message:res.message, error: res.error})
        })
        .catch(err => {
            commit('setError', err)
        })
    }
}

//change state
const mutations = {
    setUser(state, user){
        state.user = user;
        localStorage.setItem('user', user)
    },

    setToken(state, token){
        state.token = token;
        localStorage.setItem('token', token)
    },

    setError : (state, error) => {
        state.error = error;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}