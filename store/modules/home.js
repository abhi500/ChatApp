const { send, receive } = require('../../apis/home-api');

const state = {
    messages: [],
    error : Object
}

const getters = {
    getMessages: (state) => {
        return state.messages;
    },

    getError: (state) => {
        return state.error;
    }
}

const actions = {
    postMessage: ({commit }, payload) => {
        send('http://localhost:3000/api/v1/chats', payload)
        .then(res => res.data)
        .then(res => {
            console.log(res)
            if(res.status && res.data)
                commit('pushMessage', res.data)
            // else if(res.status)    
            //     commit('pushMessage', {

            //     })
        })
        .catch(err => {
            console.log(err)
            commit('error', err)
        })
    },

    fetchMessages: ({commit}, query) => {
        receive('http://localhost:3000/api/v1/chats', query)
        .then(res => res.data)
        .then(res => {
            if(res.status)
                commit('receiveMessages', res.data)
        })
        .catch(err => {
            console.log(123)
            commit('error', err)
        })
    }
}

const mutations = {
    pushMessage: (state, message) => {
        console.log("Sdfsdf")
        state.messages.push(message);
    },

    receiveMessages: (state, messages) => {
        console.log('receiveMessages')
        return state.messages = messages;
    },

    error: (state, error) => {
        return state.error = error;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}