<template>
    <div class="message-area message-area--size">
        <input type="text" 
            placeholder="Write message ..." 
            class="message-area__input message-area__input--size" 
            v-model="message">
        <button class="message-area__send message-area__send--size message-area__send--theme" @click="send">
            <IconifyIcon :icon="icons.addIcon" class="icon"/>
        </button>
    </div>
</template>

<script>

import IconifyIcon from '@iconify/vue';
import addIcon from '@iconify/icons-codicon/add';
import { EventBus } from '../../../event-bus.js';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
		IconifyIcon,
    },
    props: ['to', 'self'],
    
	data() {
		return {
			icons: {
				addIcon,
            },
            message: null
		};
    },

    created() {
        //call send method when use click enter button
    },

    methods: {
        ...mapActions('home', [
            'postMessage'
        ]),

        send(){
            if(!this.message)
                return;
            var payload = {
                from_user: {
                    id: this.self.id,
                    name: this.self.name
                },
                to_user:{
                    id: this.to._id,
                    name: this.to.name
                },
                message: this.message
            }
            this.postMessage(payload);
            this.message = "";
        }
    },

    mounted() {

        //send message when user press enter button
        window.addEventListener('keypress', (e) => {
            if(e.keyCode == 13)
                this.send();
        })
    },
}
</script>

<style lang="scss" scoped>

.message-area{
    display: flex;
    box-shadow: 0px 0px 10px 0px lightgray;

    &--size{
        height: 60px;
        width: 50vw;
    }

    &__input{
        border: none;
        padding: 20px;

        &--size{
            height: 100%;
            width: 100%;
        }
    }

    &__send{
        border: none;
        cursor: pointer;

        &--theme{
            background-color: #6895ED;
        }

        &--size{
            width: 80px;
            height: 60px;
        }
    }
}

.icon{
    height: 25px;
    width: 25px;
    color: white;
}

</style>