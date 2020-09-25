<template>
    <button class="button button--size button--theme" @click="login(user)">SignIn now</button>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex';


export default {
    props: ['user'],

    computed: {

       ...mapGetters('auth', {
            token: 'getToken',
            error: 'getError'
       }),
    },

    methods: mapActions('auth', [
        'login'
    ]),

    created() {
        //navigate to home page if already login
        if(this.token){
            this.$router.push('/');
        }
    },

    watch: {
        user(val){
            console.log(val)
        }
    },
}
</script>

.<style lang="scss" scoped>

.button{
    margin-top: 10px;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 600;
    border-radius: 5px;


    &--size{
        width: 100%;
        height: 50px;
    }

    &--theme{
        background-color: #1EAD4F;
    }

}

</style>