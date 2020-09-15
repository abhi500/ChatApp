<template>
    <button class="button button--size button--theme">
        <IconifyIcon :icon="icons.facebookIcon" class="button__icon"/>
        SignIn with Facebook</button>
</template>

<script>

import IconifyIcon from '@iconify/vue';
import facebookIcon from '@iconify/icons-logos/facebook';
import Vue from 'vue';

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

    // created() {
    //     let isLoggedIn = localStorage.getItem('user');
    //     if(!isLoggedIn){
    //         this.loadFacebookSDK(document, "script", "facebook-jssdk");
    //         this.initFacebook(); 
    //     }
    //     else{
    //         this.$router.push({
    //             name: 'Home'
    //         })
    //     }
    // },

    // methods: {
    //     logInWithFacebook() {
    //         if(localStorage.getItem('user'))
    //             return;
    //         console.log(window.FB)
    //         window.FB.login(function(response) {
    //             console.log(123)
    //             if (response.authResponse) {
    //                 localStorage.setItem('user', response.authResponse);
    //                 this.$router.push({
    //                     name: 'Home'
    //                 })
    //             } else {
    //                 console.log("cancelled")
    //             }
    //         });
    //     },

    //     async initFacebook() {
    //         window.fbAsyncInit = await function() {
    //             window.FB.init({
    //             appId: "2748473715429688", //You will need to change this
    //             cookie: true, // This is important, it's not enabled by default
    //             version: "v13.0"
    //             });
    //         };
            
    //     },

    //      async loadFacebookSDK(d, s, id) {
    //         var js,
    //             fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) {
    //             return;
    //         }
    //         js = d.createElement(s);
    //         js.id = id;
    //         js.src = "https://connect.facebook.net/en_US/sdk.js";
    //         fjs.parentNode.insertBefore(js, fjs);
    //     }
    // },
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