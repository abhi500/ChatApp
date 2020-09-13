import Vue from 'vue';
import VueRouter from 'vue-router';
import SignUp from './src/components/Auth/Signup.vue'
import SignIn from './src/components/Auth/Signin.vue'
import PageNotFound from './src/components/errors/PageNotFound.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            redirect: '/signin'
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
        }
    ]
})