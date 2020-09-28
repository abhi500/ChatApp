<template>
    <div class="container">
        <nav class="navbar 
                navbar--size 
                navbar--theme">
            <div class="navbar__left">
                <img :src="image" class="user__image user__image--size">
                <div class="user">
                   <h4 class="user__name">Charley</h4>
                   <span class="user__email">charley@gmail.com</span>
                </div>
            </div>
            <div class="navbar__right">
                <IconifyIcon :icon="icons.notificationOutlineBadged" class="icon"/>
            </div>
        </nav>
        <div class="section-top">
            <h4 class="title">Recent</h4>
            <div class="move">
                
            </div>
        </div>
        <ul class="recent-chats">
            <li class="recent-chat" v-for="(data, index) in 5" :key="index" @click="startConversation()">
                <recent-chat></recent-chat>
            </li> 
        </ul>

        <ul class="options">
            <li class="option" @click="switchOption($event, 0)">Contacts</li>
            <li class="option" @click="switchOption($event, 1)">Groups</li>
        </ul>
        <div class="contacts" v-if="active">
            <contacts></contacts>
        </div>
        <div class="groups" v-else>
            <groups></groups>
        </div>
    </div>
</template>

<script>

import Contacts from '../components/chat/Contacts.vue';
import Groups from '../components/chat/Groups.vue';
import RecentChat from '../components/chat/RecentChat.vue';
import IconifyIcon from '@iconify/vue';
import notificationOutlineBadged from '@iconify/icons-clarity/notification-outline-badged';
import ConversationMixin from '../mixins/conversation-mixin.js';

export default {
    mixins: [ConversationMixin],
    components: {
		IconifyIcon,
        'recent-chat': RecentChat,
        'contacts': Contacts,
        'groups': Groups
	},
    data() {
        return {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            icons: {
                notificationOutlineBadged,
            },
            active: true,
            previousSelectedOption : Element
        }
    },

    methods: {
        switchOption(event, val){
            // selected element
            let option = event.target;
            if(this.previousSelectedOption)
                this.previousSelectedOption.style.color = '#000';
            
            //change selected element color
            option.style.color = '#C4C4C4';
            
            //set current element as previousSelectedOption
            this.previousSelectedOption = option

            if(val == 0)
                this.active = true;
            else
                this.active = false;   
        },
    },

    mounted() {
        //set current selected option as previousSelectedOption
        this.previousSelectedOption = document.getElementsByClassName('option')[0]
    },
}
</script>

<style lang="scss" scoped>

.container{
    display: flex;
    flex-direction: column;
    padding: 30px;
}

.navbar{
    display: flex;
    align-items: center;
    flex: 60px;
    position: sticky;
    top: 0;

    &--size{
        min-height: 60px;
        width: 100%;
    }

    // &--theme{
    //     // background-color: #E8EAF6;
    // }
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

.navbar{

    &__left{
        display: flex;
    }

    &__right{
        display: flex;
        margin-left: auto;
    }
}

.icon{
    color: #D1D1D1;
    font-size: 18px;
    cursor: pointer;
}

.recent{

    &-chats{
        display: flex;
        list-style: none;
        width: 100%;
        padding-bottom: 10px;
        padding-left: 10px;
        overflow-y: scroll;
        
    }

    &-chat{
       padding-right: 10px;
    }
}

.options{
    margin-top: 20px;
    display: flex;
    list-style: none;
    // justify-content: space-evenly;
}

.option{
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    margin-right: 50px;

    &:first-child{
        color: #C4C4C4;
    }
}

.contacts{
    overflow-y: scroll;
}

.groups{
    overflow: scroll;
}


</style>