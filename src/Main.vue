<template>
    <div id="app">
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.router)
    },
}
</script>

<style lang="scss" scoped>

#app{
    height: 100vh;
    width: 100%;
}

</style>