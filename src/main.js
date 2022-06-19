import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router/index.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// import '../theme/my-theme.less'

Vue.use(VueRouter);
Vue.use(ViewUI);

// The routing configuration
// const RouterConfig = {
//     routes: Routers
// };
// const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});