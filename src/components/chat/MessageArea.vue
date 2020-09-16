<template>
    <div class="message-area message-area--size">
        <input type="text" placeholder="Write message ..." class="message-area__input message-area__input--size">
        <button class="message-area__send message-area__send--size message-area__send--theme">
            <IconifyIcon :icon="icons.addIcon" class="icon"/>
        </button>
    </div>
</template>

<script>

import IconifyIcon from '@iconify/vue';
import addIcon from '@iconify/icons-codicon/add';

export default {
    components: {
		IconifyIcon,
	},
	data() {
		return {
			icons: {
				addIcon,
			},
		};
	},
}
</script>

<style lang="scss" scoped>

.message-area{
    display: flex;
    box-shadow: 0px 0px 10px 0px lightgray;

    &--size{
        height: 70px;
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
            height: 70px;
        }
    }
}

.icon{
    height: 25px;
    width: 25px;
    color: white;
}

</style>