<template>
    <span v-if="!hideSelf" class="message message--theme">{{ message }}</span>
</template>

<script>
export default {
    props: ['message'],
    data() {
        return {
            hideSelf: true
        }
    },

    watch: {
        //show error message and hide after 2 second
        message(old, val){
            this.hideSelf = false;
            setTimeout(() => {
                this.hideSelf = true;
            }, 2000);
       }
    },
}
</script>

<style lang="scss" scoped>
    .message{
        color: white;
        font-weight: 600;
        border-radius: 5px;
        position: fixed;
        right: 0;
        top: 0;
        padding: 10px;
        margin: 10px;

        &--theme{
            background-color: #fdd835;
        }
    }




</style>