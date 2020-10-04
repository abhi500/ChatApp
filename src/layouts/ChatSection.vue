<template>
    <div class="chat-section chat-section--size">
        <nav class="chat-section__navbar 
            chat-section__navbar--size 
            chat-section__navbar--theme">
            <div class="navbar__left">
                <img :src="image" class="user__image user__image--size">
                <div class="user">
                   <h4 class="user__name">{{ user.name }}</h4>
                   <span class="user__email">{{ user.email }}</span>
                </div>
            </div>
            <div class="navbar__right">
                <button class="button button--size button--theme">
                    <IconifyIcon :icon="icons.videoFilled" class="icon"/>
                </button>
                <button class="button button--size button--theme">
                    <IconifyIcon :icon="icons.micIcon" class="icon" />
                </button>                
            </div>
        </nav>
        <ul class="chat-section__chats chat-section__chats--size">
            <li v-for="message in messages" :key="message.id" class="chat-section__chat chat-section__chat--theme">
                <div v-if="message.from_user.id != self.id" class="received-message received-message--theme">
                    <p>{{message.message}}</p>
                    <span class="time">{{ ago(message.created_at) }}</span>
                </div>
                <div v-else class="sended-message received-message--theme">
                    <p>{{message.message}}</p>
                    <span class="time">{{ ago(message.created_at) }}</span>
                </div>
            </li>
        </ul>
        <div class="chat-section__message-box ">
            <message-area :to="user" :self="self"></message-area>
        </div>
    </div>
</template>

<script>

import IconifyIcon from '@iconify/vue';
import videoFilled from '@iconify/icons-carbon/video-filled';
import micIcon from '@iconify/icons-bi/mic';
import MessageArea from '../components/chat/MessageArea.vue';
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment'

export default {
    components: {
		IconifyIcon,
        'message-area' : MessageArea
    },
    props: ['user'],

	data() {
		return {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
			icons: {
				videoFilled,
                micIcon,
            },
            time: null
		};
    },

    created() {
        const query = {
                from_user_id: this.self.id,
                to_user_id: this.user._id
            };
        this.fetchMessages(query);
    },

    computed: {
        ...mapGetters('home',{
            messages:'getMessages',
        }),

        ...mapGetters('auth', {
            self: 'getUser'
        }),
    },

    methods: {
        ...mapActions('home', [
            'fetchMessages',
        ]),

        ago(time){
            return moment(time).fromNow();
        }
    },

    watch: {
        user(){
            const query = {
                from_user_id: this.self.id,
                to_user_id: this.user._id
            };
            this.fetchMessages(query);
        }
    },
}
</script>

<style lang="scss" scoped>

.chat-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;;

    &--size{
        height: 100vh;
        width: 100%;
    }

    &__navbar{
        display: flex;
        align-items: center;
        padding: 0 20px;
        flex: 60px;
        position: sticky;
        top: 0;

        &--size{
            min-height: 60px;
            width: 100%;
        }

        &--theme{
            background-color: #E8EAF6;
        }
    }

    &__chats{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: auto;
        list-style: none;
        padding: 0 20px 120px 20px;

        &--size{
            width: 100%;
        }
    }

    &__message-box{
        flex: auto;
        position: fixed;
        bottom: 30px;
    }
}

.navbar{

    &__left{
        display: flex;
    }

    &__right{
        display: flex;
        margin-left: auto;
    }
}

.user{
    margin-left: 10px;

    &__email{
        font-size: 12px;
    }

    &__image{
        border-radius: 40px;

        &--size{
            height: 40px;
            width: 40px;
        }
    }
}

.button{
    border: none;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 10px;

    
    &--size{
        height: 40px;
        width: 40px;
    }

    &--theme{
        background-color: #6895ED;
    }
}

.icon{
    color: white;
    font-size: 18px;
}

.received-message{
    display: inline-block;
    border-radius: 0 0 0 15px;
    padding: 10px;
    margin-top: 20px;
    box-shadow: 0px 0px 20px 0px lightgrey;

     &--theme{
        background-color: white;
    }
}

.sended-message{
    display: block;
    float: right;
    padding: 10px;
    border-radius: 0 0 15px 0;
    margin-top: 20px;
    box-shadow: 0px 5px 20px 0px lightgrey;

     &--theme{
        background-color: white;
    }
}

.time{
    margin-top: 10px;
    float: right;
    font-size: 10px;
}

p{
    word-break: break-all;
    white-space: normal;
}

</style>