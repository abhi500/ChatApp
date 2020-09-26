<template>
    <span class="error-message">{{ message }}</span>
</template>

<script>
export default {
    props: ['message'],
}
</script>

<style lang="scss" scoped>

.error-message{
    color: #fdd835;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 10px;
}


</style>