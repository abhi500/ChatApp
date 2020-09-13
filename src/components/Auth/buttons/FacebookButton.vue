<template>
    <button class="button button--size button--theme">
        <IconifyIcon :icon="icons.facebookIcon" class="button__icon"/>
        SignIn with Facebook</button>
</template>

<script>

import IconifyIcon from '@iconify/vue';
import facebookIcon from '@iconify/icons-logos/facebook';

export default {
    components: {
		IconifyIcon,
	},
	data() {
		return {
			icons: {
                facebookIcon,
			},
		};
	},
}
</script>

.<style lang="scss" scoped>

.button{
    margin-top: 20px;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 600;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;


    &--size{
        width: 100%;
        height: 50px;
    }

    &--theme{
        background-color: #444456;
    }

    &__icon{
        font-size: 22px;
        margin-right: 10px;
    }

}

</style>