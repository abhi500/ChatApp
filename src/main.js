import Vue from 'vue';
import Main from './Main.vue';
import router from '../router';
import store from '../store';
import '../public/stylesheets/style.css'

router.beforeEach((to, from, next) => {
    if(to.name !== 'Signin' && !localStorage.getItem('token'))
        next({  name: 'Signin' })
    next();
})


new Vue({
    store: store,
    router: router,
    render: h => h(Main)
}).$mount('#app')
