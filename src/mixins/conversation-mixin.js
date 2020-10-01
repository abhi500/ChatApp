import { EventBus } from '../../event-bus.js';

export default {
    methods: {

         /**
         * start conversation with selected user or group
         */
        startConversation(user){
            EventBus.$emit('start-conversation', user);
        }
    },
}