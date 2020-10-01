<template>
    <div class="container container--size">
        <span v-if="message">
            {{ message }}
        </span>
        <div class="container__left container__left--theme container__left--size">
            <user-data></user-data>
        </div>
        <div class="container__right container__right--theme container__right--size">
            <default-chat-section v-if="enable"></default-chat-section>
            <chat-section v-else :user="user"></chat-section>
        </div>
    </div>
</template>

<script>

import UserData from '../layouts/UserData.vue'
import DefaultChatSection from '../layouts/DefaultChatSection.vue';
import io from 'socket.io-client';
import { EventBus } from '../../event-bus.js';

export default {
    components: {
        'chat-section': () => import('../layouts/ChatSection.vue'),
        'user-data': UserData,
        'default-chat-section': DefaultChatSection
    },

    data() {
        return {
            user: Object,
            enable: true,
            message: null,
        }
    },

    mounted() {

        //open chat-section layout
        EventBus.$on('start-conversation', (user) => {
            this.user = user;
            this.enable = false;
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