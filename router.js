import Vue from 'vue';
import VueRouter from 'vue-router';
import SignUp from './src/pages/SignupPage.vue'
import SignIn from './src/pages/SigninPage.vue'
import PageNotFound from './src/pages/PageNotFound.vue';
import Home from './src/pages/HomePage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home,
            beforeRouteEnter (to, from, next) {
                let user = localStorage.getItem('user');
                console.log(user)
                // if(user)
                //     // next();
                // else
                    this.$router.push({
                        name: 'Signin'
                    })    
            }
        },
        {
            name: 'Signup',
            path: '/signup',
            component: SignUp
        },
        {
            name: 'Signin',
            path: '/signin',
            component: SignIn
        },
        {
            name: 'Page Not found',
            path: '*',
            component: PageNotFound
        },
    ]
})