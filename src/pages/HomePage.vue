<template>
    <div class="container container--size">
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

export default {
    components: {
        'chat-section': ChatSection,
        'user-data': UserData
    }
    
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