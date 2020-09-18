<template>
    <section class="user user--size">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" 
            class="user__image user__image--size">
        <div class="user__info">
            <span class="user__name">Bob</span>
            <span class="user__email">bob@gmail.com</span>    
        </div>
        <IconifyIcon :icon="icons.moreHorizontalFill" class="icon" />
    </section>
</template>

<script>

import IconifyIcon from '@iconify/vue';
import moreHorizontalFill from '@iconify/icons-eva/more-horizontal-fill';

export default {
    components: {
		IconifyIcon,
	},
	data() {
		return {
			icons: {
				moreHorizontalFill,
			},
		};
	},
    
}
</script>

.<style lang="scss" scoped>



.user{
    display: flex;
    align-items: center;

    &--size{
        width: 100%;
    }

    &__image{
        border-radius: 15px;

        &--size{
            height: 30px;
            width: 30px;
        }
    }

    &__info{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-left: 10px;
    }

    &__name{
        font-weight: bold;
    }

    &__email{
        color: #C4C4C4;
        font-size: 12px; 
    }
}

.icon{
    font-size: 30px;
    color: #C4C4C4;
    margin-left: auto;
}

</style>