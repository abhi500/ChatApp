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
    </div>
</template>

<script>

import IconifyIcon from '@iconify/vue';
import notificationOutlineBadged from '@iconify/icons-clarity/notification-outline-badged';

export default {
    components: {
		IconifyIcon,
	},
    data() {
        return {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            icons: {
				notificationOutlineBadged,
			},
        }
    },
}
</script>

<style lang="scss" scoped>

.container{
    display: flex;
    flex-direction: column;
}

.navbar{
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
        // background-color: #E8EAF6;
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

</style>