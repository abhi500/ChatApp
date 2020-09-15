<template>
    <div class="container container--size">
        <div class="container__left container__left--theme">
sdfsdf
        </div>
        <div class="container__right container__right--theme">
            <chat-section></chat-section>
        </div>
    </div>
</template>

<script>

import ChatSection from '../layouts/ChatSection.vue';

export default {
    components: {
        'chat-section': ChatSection
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
        flex: 2;

        &--theme{
            background-color: white;
        }
    }

    &__right{
        flex: 3;

        &--theme{
            background-color: lighten($color: #E8EAF6, $amount: 3%);
        }
    }
}

</style>