<template>
    <div class="container container--size">
        <span v-if="message">
            {{ message }}
        </span>
        <div class="container__left container__left--theme container__left--size">
            <user-data></user-data>
        </div>
        <div class="container__right container__right--theme container__right--size">
            <chat-section></chat-section>
        </div>
    </div>
</template>

<script>

import ChatSection from '../layouts/ChatSection.vue';
import UserData from '../layouts/UserData.vue'
import io from 'socket.io-client';
import { EventBus } from '../../event-bus.js';

export default {
    components: {
        'chat-section': ChatSection,
        'user-data': UserData
    },

    data() {
        return {
            message: null
        }
    },

    created() {

        const socket = io({
            reconnection: true,
            reconnectionAttemps: Infinity,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
            randomizationFactor: 0.5
        },'http://localhost:8080/');

        socket.on('connect', () => {
            socket.emit('user-id', {
                time: Date.now()}
            )
            console.log('connect')
            this.message = 'connected';
        })

        socket.on('connect_error', () => {
            this.message = 'connect error'
            console.log('connect__error')
            setTimeout(() => {
                socket.connect();
            }, 2000);
        });

        socket.on('disconnect', () => {
            console.log('disconnect')
            console.log('disconnect')
            setTimeout(() => {
                socket.connect();
            }, 500);
        });

        EventBus.$on('message', (message) => {
            socket.emit('chat', {name: message, email: message, password: message})
            console.log(message)
        })
    },
    
}
</script>

<style lang="scss" scoped>

.container{
    display: flex;

    &--size{
        height: 100vh;
        width: 100%;
    }

    &__left{
        // flex: 3;

        &--theme{
            background-color: white;
        }

        &--size{
            min-width: 30%;
            height: 100vh;
            overflow: hidden;
        }
    }

    &__right{
        // flex: 6;

        &--theme{
            background-color: lighten($color: #E8EAF6, $amount: 3%);
        }

        &--size{
            min-width: 70%;
            height: 100vh;
        }
    }
}


</style>