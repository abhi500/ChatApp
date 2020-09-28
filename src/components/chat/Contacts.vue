<template>
    <div class="container container--size">
        <div class="search search--size">
            <IconifyIcon :icon="icons.searchOutlined" 
                class="search__icon search__icon--size"/>
            <input type="search" 
                id="search" 
                placeholder="Type name to find contact" 
                class="search__input search__input--size">
        </div>
        <ul class="container__contacts container__contacts--size">
            <li class="container__contact container__contact--size" 
                v-for="(data, index) in 15" :key="index" 
                @click="startConversation()">
                <user></user>
            </li>
        </ul>
        
    </div>
</template>

<script>

import User from './User.vue';
import IconifyIcon from '@iconify/vue';
import searchOutlined from '@iconify/icons-ant-design/search-outlined';
import ConversationMixin from '../../mixins/conversation-mixin.js';

export default {
    mixins: [ConversationMixin],
    components: {
        IconifyIcon,
        'user': User
	},
	data() {
		return {
			icons: {
				searchOutlined,
			},
		};
	},
    
}
</script>

.<style lang="scss" scoped>

::placeholder{
    color: #C4C4C4;
}

.container{
    display: flex;
    flex-direction: column;
    // overflow: scroll;

    &__contacts{
        list-style: none;
        margin-top: 20px;
        overflow-y: scroll;
        
    }

    &__contact{
        display: flex;
        align-items: center;
        cursor: pointer;
        border-bottom: 1px solid #E8E8E8;
        &--size{
            height: 60px;
            width: 100%;
        }
    }
}

.search{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E8E8E8;

    &--size{
        height: 40px;
        width: 100%;
    }

    &__input{
        border: none;
        padding: 10px;
    }

    &__icon{
        color: #E8E8E8;
        font-size: 20px;
    }
}

</style>