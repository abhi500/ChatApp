<template>
    <div class="signin__container signin--size">
        <div class="left__container left__container--theme left__container--size"></div>
        <div class="right__container right__container--theme right__container--size">
            <div class="top top--size">
                <h3 class="title">Welcome Back</h3>
                <h1 class="subtitle">Signin to your account</h1>
            </div>
            <div class="form">
                <label for="email">Email</label>
                <input type="email" placeholder="Email" class="form__email form__email--size">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" class="form__password form__password--size">

                 <div class="form__flex">
                    <input type="radio" id="remember" name="rememberme">
                    <label for="remember">Remember me</label>
                    <a href="#" class="forget-password">Forget Password?</a>
                </div>

                <login-button></login-button>
                <google-button></google-button>
                <facebook-button></facebook-button>
                <p class="label">Don't have an accout? <router-link to="/signup" class="signup__link">Signup now</router-link></p>
                
            </div>
        </div>
    </div>
</template>

<script>

import GoogleButton from '../components/buttons/GoogleButton.vue';
import FacebookButton from '../components/buttons/FacebookButton.vue';
import LoginButton from '../components/buttons/LoginButton.vue';

export default {
    components : {
        'google-button': GoogleButton,
        'facebook-button': FacebookButton,
        'login-button': LoginButton
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
        margin-bottom: 20px;

        &--size{
            width: 400px;
            height: 50px;
        }
    }

    &__password{

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
    margin-top: 30px;
    color: #808080;
    align-self: center;
}

.signup__link{
    align-self: flex-end;
    text-decoration: none;
    color: #453D78;
}

</style>