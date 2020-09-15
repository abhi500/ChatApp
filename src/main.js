import Vue from 'vue';
import Main from './Main.vue';
import router from '../router';
import '../public/stylesheets/style.css'

Vue.config.productionTip = false;

new Vue({
    router: router,
    render: h => h(Main)
}).$mount('#app')
