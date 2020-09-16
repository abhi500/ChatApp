<template>
    <div class="chat-section chat-section--size">
        <nav class="chat-section__navbar 
            chat-section__navbar--size 
            chat-section__navbar--theme">
            <div class="navbar__left">
                <img :src="image" class="user__image user__image--size">
                <div class="user">
                   <h4 class="user__name">Charley</h4>
                   <span class="user__email">charley@gmail.com</span>
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
                <div v-if="message.id % 2 == 1" class="received-message received-message--size">
                    {{  message.message }}
                </div>
                <div v-else class="sended-message sended-message--size">
                    {{ message.message }}
                </div>
            </li>
        </ul>
        <div class="chat-section__message-box ">
            <message-area></message-area>
        </div>
    </div>
</template>

<script>

import IconifyIcon from '@iconify/vue';
import videoFilled from '@iconify/icons-carbon/video-filled';
import micIcon from '@iconify/icons-bi/mic';
import MessageArea from '../components/chat/MessageArea.vue';

export default {
    components: {
		IconifyIcon,
        'message-area' : MessageArea
	},
	data() {
		return {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
			icons: {
				videoFilled,
                micIcon,
			},
            messages: [
                {
                    id: 1,
                    message: 'Abhisheksdf asdf asdfsad f'
                },
                {
                    id: 2,
                    message: 'Abhisheksdf asdf asdfsad f'
                },
                {
                    id: 3,
                    message: 'Abhisheksdf asdf asdfsad f'
                },
                {
                    id: 4,
                    message: 'Abhisheksdf asdf asdfsad f'
                },
                {
                    id: 5,
                    message: 'Abhisheksdf asdf asdfsad f'
                },
                {
                    id: 6,
                    message: 'Abhisheksdf asdf asdfsad f'
                },
                {
                    id: 7,
                    message: 'Abhisheksdf asdf asdfsad f'
                },
                {
                    id: 8,
                    message: 'Abhisheksdf asdf asdfsad f'
                }
            ]
		};
	},
    
}
</script>

<style lang="scss" scoped>

.chat-section{
    display: flex;
    flex-direction: column;
    align-items: center;

    &--size{
        height: 100vh;
        width: 100%;
    }

    &__navbar{
        display: flex;
        align-items: center;
        padding: 0 20px;
        flex: 70px;

        &--size{
            height: 70px;
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
        flex: 100%;
        list-style: none;

        &--size{
            width: 100%;
        }
    }

    &__chat{
        margin: 10px;

        &--theme{
            background-color: white;
        }
    }

    &__message-box{
        flex: 70px;
        position: sticky;
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

    // &__name{

    // }

    &__email{
        font-size: 12px;
    }

    &__image{
        border-radius: 15px;

        &--size{
            height: 30px;
            width: 30px;
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
    
    &--size{
        height: 100px;
    }
}

.sended-message{
    float: right;

    &--size{
        height: 100px;
    }
}

</style>