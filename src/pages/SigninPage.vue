<template>
    <div class="signin__container signin--size">
        <div class="left__container left__container--theme left__container--size"></div>
        <div class="right__container right__container--theme right__container--size">
            <div class="top top--size">
                <h3 class="title">Welcome</h3>
                <h1 class="subtitle">Signin to your account</h1>
            </div>
            <div class="form">
                <label for="email" class="label">Email</label>
                <input
                    placeholder="Email"
                    class="form__email form__email--size" 
                    v-model="userInfo.email"
                   >
                <input-error v-if="error.email" v-bind:message="error.email"></input-error>

                <label for="password" class="label">Password</label>
                <input type="password" 
                    placeholder="Password" 
                    class="form__password form__password--size" 
                    v-model="userInfo.password">
                <input-error v-if="error.password" v-bind:message="error.password"></input-error>

                 <div class="form__flex">
                    <input type="radio" id="remember" name="rememberme">
                    <label for="remember">Remember me</label>
                    <a href="#" class="forget-password">Forget Password?</a>
                </div>

                <login-button :user=userInfo></login-button>
                <google-button></google-button>
                <facebook-button></facebook-button>
                <p class="label">Don't have an accout? 
                    <router-link to="/signup" 
                    class="signup__link">Signup now</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>

import GoogleButton from '../components/buttons/GoogleButton.vue';
import FacebookButton from '../components/buttons/FacebookButton.vue';
import LoginButton from '../components/buttons/LoginButton.vue';
import InputError from '../components/errors/InputError.vue';
import { mapGetters, mapState } from 'vuex';
import PopUpMessage from '../components/errors/PopupMessage.vue';
import Vue from 'vue';

export default {
    data() {
        return {
            userInfo: {
                email: null,
                password: null
            },
            error: {
                message: null,
                email: null,
                password: null
            }
        }
    },
    components : {
        'google-button': GoogleButton,
        'facebook-button': FacebookButton,
        'login-button': LoginButton,
        'input-error': InputError,
        'pop-up': PopUpMessage
    },

    computed: {
        ...mapGetters('auth', {
            errorObj: 'getError',
            user: 'getUser'
        })
    },

    methods: {
        createPopUpMessage(){
            const context = document.querySelector('.signin__container');
            let popUpCompoment = `<pop-up :message="${this.error.message}"></pop-up>`
            context.append(popUpCompoment)
        }
    },

    watch: {
        //load home page when login api call
        user(val){
            this.$router.push({name: 'Home'})
        },

        /**
         * 
         */
        errorObj(val){
            this.error = val;
            this.createPopUpMessage()
        }
    },
    
}
</script>

<style lang="scss" scoped>

.signin__container{
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;

    &--size{
        width: 100%;
        height: 100vh;
    }
}

.left__container{
    flex: 1;
    height: 100vh;

    &--theme{
        background-color: blue;
    }

    &--size{
        height: auto;
    }
}   

.right__container{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    
    // &--theme{
    //     background-color: blue;
    // }

    &--size{
        height: 100vh;
        width: 100%;
        min-width: 50vw;
    }
}

.top{
    margin-bottom: 50px;

    &--size{
        width: 400px;
        height: 50px;
    }
}

.title{
    text-align: start;
}

.subtitle{
    margin-top: 10px;
}

.form{
    display: flex;
    flex-direction: column;

    &__email{
        margin-bottom: 10px;

        &--size{
            width: 400px;
            height: 50px;
        }
    }

    &__password{
        margin-bottom: 10px;

        &--size{
            width: 400px;
            height: 50px;
        }
    }

    &__flex{
        display: flex;
        margin-top: 30px;
        margin-bottom: 30px;
    }
}

.forget-password{
    margin-left: auto;
    text-decoration: none;
    color: #656D99;
}

.label{
    margin: 10px 0;
    // color: #808080;
    // align-self: center;
}

.signup__link{
    align-self: flex-end;
    text-decoration: none;
    color: #453D78;
}

.error{
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #fdd835;
}

</style>